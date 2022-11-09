using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using stepmedia_test_api.Commons;
using stepmedia_test_api.DbContexts;
using stepmedia_test_api.Dtos;
using stepmedia_test_api.Entites;
using stepmedia_test_api.Mapper;
using stepmedia_test_api.Repositories;
using stepmedia_test_api.Repositories.BaseRepository;
using stepmedia_test_api.Repositories.Interface;
using stepmedia_test_api.Services;

async Task CreateDbIfNotExistsAsync(IHost host)
{
    using (var scope = host.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var logger = services.GetRequiredService<ILogger<Program>>();
        try
        {
            logger.LogInformation("Start MigrateAsync");
            var context = services.GetRequiredService<ApplicationDbContext>();
            await context.Database.MigrateAsync();
            logger.LogInformation("End MigrateAsync");
            //var dbInitializer = services.GetService<DBInitializer>();
            //await dbInitializer.Seed();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred creating the DB.");
        }
    }
}

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile)); ;
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IStudentService, StudentService>();

builder.Services.Configure<ConnectionString>(builder.Configuration.GetSection("ConnectionStrings"));
var connectionStrings = builder.Configuration.GetSection("ConnectionStrings").Get<ConnectionString>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.EnableDetailedErrors(true);
    options.UseSqlServer(connectionStrings?.MigrationConnection);
});
var corsSection = builder.Configuration.GetSection("CorsOptions");
if (corsSection == null)
{
    throw new NullReferenceException(nameof(corsSection));
}
var corsOption = corsSection.Get<stepmedia_test_api.Dtos.CorsOptions>();
var policyName = corsOption.PolicyName.Nullify("AppCorsPolicy");


builder.Services.AddCors(c =>
{
    c.AddPolicy(policyName, options =>
    {
        options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        if (corsOption.AllowedOrigins.IsAllowedAll())
        {
            options.AllowAnyOrigin();
        }
        else
        {
            options.WithOrigins(corsOption.AllowedOrigins);
        }

        if (corsOption.AllowedMethods.IsAllowedAll())
        {
            options.AllowAnyMethod();
        }
        else
        {
            options.WithMethods(corsOption.AllowedMethods);
        }

        if (corsOption.ExposedHeaders.IsAllowedAll())
        {
            options.AllowAnyHeader();
        }
        else
        {
            options.WithHeaders(corsOption.ExposedHeaders);
        }
    });
});

var app = builder.Build();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

await CreateDbIfNotExistsAsync(app);

app.Run();