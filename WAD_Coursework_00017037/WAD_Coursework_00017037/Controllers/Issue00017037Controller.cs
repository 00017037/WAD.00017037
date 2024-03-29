﻿using Microsoft.AspNetCore.Mvc;
using WAD_Coursework_00017037.Models;
using WAD_Coursework_00017037.Repositories;

namespace WAD_Coursework_00017037.Controllers
{
  
    public class Issue00017037Controller : ApiBase00017037Controller
    {
        private readonly IRepository00017037<Issue00017037> _issueRepository;

        public Issue00017037Controller(IRepository00017037<Issue00017037> issueRepository)
        {
            _issueRepository = issueRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var issues = await _issueRepository.GetAllAsync();
            return Ok(issues);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var issue = await _issueRepository.GetByIDAsync(id);
            if (issue == null)
                return NotFound();
            return Ok(issue);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Issue00017037 issue)
        {
            await _issueRepository.AddAsync(issue);
            return CreatedAtAction(nameof(GetById), new { id = issue.Id }, issue);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Issue00017037 issue)
        {
            if (id != issue.Id)
                return BadRequest();

            await _issueRepository.UpdateAsync(issue);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _issueRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
