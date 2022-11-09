using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using stepmedia_test_api.Dtos;
using stepmedia_test_api.Services;

namespace stepmedia_test_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentsController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var res = await _studentService.Get();
            return Ok(res);
        }[HttpDelete]
        public async Task<ActionResult> Delete()
        {
            await _studentService.Delete();
            return Ok();
        }
        [HttpPost]
        public async Task<ActionResult> CreateAsync(IEnumerable<StudentDto> request)
        {
            request = new List<StudentDto>()
            {
                new StudentDto()
                {
                    FullName = "Full name 1",
                    Dob = new DateTime(1990,1,1),
                },
                new StudentDto()
                {
                    FullName = "Full name 2 ",
                    Dob = new DateTime(1990,1,2),
                },
                new StudentDto()
                {
                    FullName = "Full name 3 ",
                    Dob = new DateTime(1990,1,3),
                },
                new StudentDto()
                {
                    FullName = "Full name 4 ",
                    Dob = new DateTime(1990,1,4),
                },
                new StudentDto()
                {
                    FullName = "Full name 5 ",
                    Dob = new DateTime(1990,1,5),
                },
                new StudentDto()
                {
                    FullName = "Full name 6 ",
                    Dob = new DateTime(1990,1,6),
                },
                new StudentDto()
                {
                    FullName = "Full name 7 ",
                    Dob = new DateTime(1990,1,7),
                },
                new StudentDto()
                {
                    FullName = "Full name 8 ",
                    Dob = new DateTime(1990,1,8),
                },
                new StudentDto()
                {
                    FullName = "Full name 9 ",
                    Dob = new DateTime(1990,1,9),
                },
                new StudentDto()
                {
                    FullName = "Full name 10 ",
                    Dob = new DateTime(1990,1,10),
                },
                new StudentDto()
                {
                    FullName = "Full name 11",
                    Dob = new DateTime(1990,1,11),
                },
                new StudentDto()
                {
                    FullName = "Full name 12 ",
                    Dob = new DateTime(1990,1,12),
                },
                new StudentDto()
                {
                    FullName = "Full name 13 ",
                    Dob = new DateTime(1990,1,13),
                },
                new StudentDto()
                {
                    FullName = "Full name 14 ",
                    Dob = new DateTime(1990,1,14),
                },
                new StudentDto()
                {
                    FullName = "Full name 15 ",
                    Dob = new DateTime(1990,1,15),
                },
                new StudentDto()
                {
                    FullName = "Full name 16 ",
                    Dob = new DateTime(1990,1,16),
                },
                new StudentDto()
                {
                    FullName = "Full name 17 ",
                    Dob = new DateTime(1990,1,17),
                },
                new StudentDto()
                {
                    FullName = "Full name 18 ",
                    Dob = new DateTime(1990,1,18),
                },
                new StudentDto()
                {
                    FullName = "Full name 19 ",
                    Dob = new DateTime(1990,1,19),
                },
                new StudentDto()
                {
                    FullName = "Full name 20 ",
                    Dob = new DateTime(1990,1,20),
                },
                new StudentDto()
                {
                    FullName = "Full name 21",
                    Dob = new DateTime(1990,1,21),
                },
                new StudentDto()
                {
                    FullName = "Full name 22 ",
                    Dob = new DateTime(1990,1,22),
                },
                new StudentDto()
                {
                    FullName = "Full name 23 ",
                    Dob = new DateTime(1990,1,23),
                },
                new StudentDto()
                {
                    FullName = "Full name 24 ",
                    Dob = new DateTime(1990,1,24),
                },
                new StudentDto()
                {
                    FullName = "Full name 25 ",
                    Dob = new DateTime(1990,1,25),
                },
                new StudentDto()
                {
                    FullName = "Full name 26 ",
                    Dob = new DateTime(1990,1,26),
                },
                new StudentDto()
                {
                    FullName = "Full name 27 ",
                    Dob = new DateTime(1990,1,27),
                },
                new StudentDto()
                {
                    FullName = "Full name 28 ",
                    Dob = new DateTime(1990,1,28),
                },
                new StudentDto()
                {
                    FullName = "Full name 29 ",
                    Dob = new DateTime(1990,1,29),
                },
                new StudentDto()
                {
                    FullName = "Full name 30 ",
                    Dob = new DateTime(1990,1,30),
                },
                new StudentDto()
                {
                    FullName = "Full name 31",
                    Dob = new DateTime(2023,2,1),
                },
                new StudentDto()
                {
                    FullName = "Full name 32 ",
                    Dob = new DateTime(2023,2,2),
                },
                new StudentDto()
                {
                    FullName = "Full name 33 ",
                    Dob = new DateTime(2023,2,3),
                },
                new StudentDto()
                {
                    FullName = "Full name 34 ",
                    Dob = new DateTime(2025,2,4),
                },
                new StudentDto()
                {
                    FullName = "Full name 35 ",
                    Dob = new DateTime(2024,2,5),
                },
                new StudentDto()
                {
                    FullName = "Full name 36",
                    Dob = new DateTime(2023,2,6),
                },
                new StudentDto()
                {
                    FullName = "Full name 37 ",
                    Dob = new DateTime(2025,2,7),
                },
                new StudentDto()
                {
                    FullName = "Full name 38 ",
                    Dob = new DateTime(2025,2,8),
                },
                new StudentDto()
                {
                    FullName = "Full name 39 ",
                    Dob = new DateTime(2026,2,9),
                },
                new StudentDto()
                {
                    FullName = "Full name 40 ",
                    Dob = new DateTime(2023,2,10),
                },
            };
            if (request.Count() < 30)
                return BadRequest("number of students >= 30");
            await _studentService.CreateAsync(request);
            return Ok();
        }
    }
}
