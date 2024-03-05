using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WAD_Coursework_00017037.Data;
using WAD_Coursework_00017037.Models;

namespace WAD_Coursework_00017037.Repositories
{
    public class IssueRepository00017037 : IRepository00017037<Issue>
    {
        private readonly GeneralDBContext _context;

        public IssueRepository00017037(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task<Issue> AddAsync(Issue issue)
        {
            _context.Issues.Add(issue);
            await _context.SaveChangesAsync();
            return issue;
        }

        public async Task DeleteAsync(int id)
        {
            var issue = await _context.Issues.Include(i => i.Comments).FirstOrDefaultAsync(i => i.Id == id);
            if (issue == null) return; 

            if (issue.Comments.Any())
            {
                _context.Comments.RemoveRange(issue.Comments);
            }

            // Then, delete the Issue itself
            _context.Issues.Remove(issue);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Issue>> GetAllAsync()
        {
            return await _context.Issues.Include(issue => issue.Comments).ToListAsync();
        }
        public async Task<Issue> GetByIDAsync(int id)
        {
            return await _context.Issues
                          .Include(issue => issue.Comments)
                          .FirstOrDefaultAsync(issue => issue.Id == id);
        }

        public async Task<Issue> UpdateAsync(Issue issue)
        {
            _context.Entry(issue).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return issue;
        }
    }
}
