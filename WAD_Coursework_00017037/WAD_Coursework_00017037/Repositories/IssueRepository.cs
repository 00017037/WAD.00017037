using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WAD_Coursework_00017037.Data;
using WAD_Coursework_00017037.Models;

namespace WAD_Coursework_00017037.Repositories
{
    public class IssueRepository : IRepository<Issue>
    {
        private readonly GeneralDBContext _context;

        public IssueRepository(GeneralDBContext context)
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
            var issue = await _context.Issues.FindAsync(id);
            if (issue != null)
            {
                _context.Issues.Remove(issue);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Issue>> GetAllAsync()
        {
            return await _context.Issues.ToListAsync();
        }

        public async Task<Issue> GetByIDAsync(int id)
        {
            return await _context.Issues.FindAsync(id);
        }

        public async Task UpdateAsync(Issue issue)
        {
            _context.Entry(issue).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
