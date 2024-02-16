using Microsoft.AspNetCore.Mvc;
using WAD_Coursework_00017037.Models;
using WAD_Coursework_00017037.Repositories;

namespace WAD_Coursework_00017037.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : Controller
    {
        private readonly CommentRepository _commentRepository;

        public CommentController(CommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comments = await _commentRepository.GetAllAsync();
            return Ok(comments);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var comment = await _commentRepository.GetByIDAsync(id);
            if (comment == null)
                return NotFound();
            return Ok(comment);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Comment comment)
        {
            await _commentRepository.AddAsync(comment);
            return CreatedAtAction(nameof(GetById), new { id = comment.Id }, comment);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Comment comment)
        {
            if (id != comment.Id)
                return BadRequest();

            await _commentRepository.UpdateAsync(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _commentRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}

