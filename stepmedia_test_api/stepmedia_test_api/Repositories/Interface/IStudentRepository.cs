using stepmedia_test_api.Entites;
using stepmedia_test_api.Repositories.BaseRepository;

namespace stepmedia_test_api.Repositories.Interface
{
    public interface IStudentRepository : IBaseRepository<Student, Guid>
    {
    }
}
