using stepmedia_test_api.Dtos;

namespace stepmedia_test_api.Services
{
    public interface IStudentService
    {
        Task<IEnumerable<StudentDto>> Get();
        Task Delete();
        Task<IEnumerable<StudentDto>> CreateAsync(IEnumerable<StudentDto> request);
    }
}
