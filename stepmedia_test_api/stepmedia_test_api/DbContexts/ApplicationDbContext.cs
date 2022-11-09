
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using stepmedia_test_api.Entites;
using stepmedia_test_api.DbContexts;

namespace stepmedia_test_api.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }
        public virtual DbSet<Student> Students { set; get; }
        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);

        //}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Method intentionally left empty.
            //optionsBuilder.UseLazyLoadingProxies();
            //optionsBuilder.ConfigureWarnings(w => w.Ignore(CoreEventId.LazyLoadOnDisposedContextWarning));
        }
    }
}
