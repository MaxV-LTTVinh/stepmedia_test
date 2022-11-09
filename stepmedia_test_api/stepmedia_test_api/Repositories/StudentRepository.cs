using stepmedia_test_api.DbContexts;
using stepmedia_test_api.Entites;
using stepmedia_test_api.Repositories.BaseRepository;
using stepmedia_test_api.Repositories.Interface;

namespace stepmedia_test_api.Repositories
{
    public class StudentRepository : BaseRepository<Student, Guid>, IStudentRepository
    {
        public StudentRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
