using AutoMapper;
using Microsoft.EntityFrameworkCore;
using stepmedia_test_api.Dtos;
using stepmedia_test_api.Entites;
using stepmedia_test_api.Repositories.Interface;
using System.Linq;

namespace stepmedia_test_api.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;
        protected readonly IMapper _mapper;
        public StudentService(IMapper mapper, IStudentRepository studentRepository)
        {
            _mapper = mapper;
            _studentRepository = studentRepository;
        }
        public async Task<IEnumerable<StudentDto>> Get()
        {
            var query = _studentRepository.GetNoTrackingEntities().OrderBy(e => e.Dob);
            var students = await _mapper.ProjectTo<StudentDto>(query).ToListAsync();



            var result = students.Skip(30).ToList();
            result.InsertRange(result.Count / 2, students.Take(10));
            result = students.Skip(10).Take(10).Concat(result).Concat(students.Skip(20).Take(10)).ToList();
            return result;
        }
        public virtual async Task<IEnumerable<StudentDto>> CreateAsync(IEnumerable<StudentDto> request)
        {
            var entitiesNew = new List<Student>();
            _mapper.Map(request, entitiesNew);
            var affectedCount = await _studentRepository.CreateAsync(entitiesNew);
            if (affectedCount <= 0)
            {
                throw new NullReferenceException();
            }
            var result = request;
            return result;
        }

        public async Task Delete()
        {
            await _studentRepository.DeleteHardAll();
        }
    }
}
