
using AutoMapper;
using stepmedia_test_api.Dtos;
using stepmedia_test_api.Entites;

namespace stepmedia_test_api.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Student, StudentDto>().ReverseMap();

        }

    }
}
