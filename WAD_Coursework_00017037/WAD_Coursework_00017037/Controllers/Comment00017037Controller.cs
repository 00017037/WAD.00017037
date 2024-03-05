using Microsoft.AspNetCore.Mvc;
using WAD_Coursework_00017037.Models;
using WAD_Coursework_00017037.Repositories;

namespace WAD_Coursework_00017037.Controllers
{
   
    public class Comment00017037Controller : ApiBase00017037Controller
    {
        private readonly IRepository00017037<Comment00017037> _commentRepository;

        public Comment00017037Controller(IRepository00017037<Comment00017037> commentRepository)
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
        public async Task<IActionResult> Create(Comment00017037 comment)
        {
            // Create a new Comment object with only IssueId and Text
            var newComment = new Comment00017037
            {
                IssueId = comment.IssueId,
                Text = comment.Text
            };

            await _commentRepository.AddAsync(newComment);
            return CreatedAtAction(nameof(GetById), new { id = newComment.Id }, newComment);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Comment00017037 updatedComment)
        {
            var existingComment = await _commentRepository.GetByIDAsync(id);
            if (existingComment == null)
            {
                return NotFound();
            }

            existingComment.Text = updatedComment.Text;

            await _commentRepository.UpdateAsync(existingComment);
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

