﻿using Microsoft.EntityFrameworkCore;
using WAD_Coursework_00017037.Models;

namespace WAD_Coursework_00017037.Data
{
    public class GeneralDBContext:DbContext
    {
        public GeneralDBContext(DbContextOptions<GeneralDBContext> options) : base(options) { }
        public DbSet<Comment00017037> Comments { get; set; }
        public DbSet<Issue00017037> Issues { get; set; }
    }
}
