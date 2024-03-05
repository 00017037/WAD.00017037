using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WAD_Coursework_00017037.Models;

namespace WAD_Coursework_00017037.Controllers
{
    public class Home00017037Controller : Controller
    {
        private readonly ILogger<Home00017037Controller> _logger;

        public Home00017037Controller(ILogger<Home00017037Controller> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
