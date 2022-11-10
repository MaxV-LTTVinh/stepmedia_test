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
            if (request.Count() < 30)
                return BadRequest("number of students >= 30");
            await _studentService.CreateAsync(request);
            return Ok();
        }
    }
}
