using Microsoft.EntityFrameworkCore;
using WAD_Coursework_00017037.Data;
using WAD_Coursework_00017037.Models;

namespace WAD_Coursework_00017037.Repositories
{
    public class CommentRepository:IRepository<Comment>
    {
        private readonly GeneralDBContext _context;

        public CommentRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task<Comment> AddAsync(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return comment;
        }

        public async Task DeleteAsync(int id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment != null)
            {
                _context.Comments.Remove(comment);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }

        public async Task<Comment> GetByIDAsync(int id)
        {
            return await _context.Comments.FindAsync(id);
        }

        public async Task UpdateAsync(Comment comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
