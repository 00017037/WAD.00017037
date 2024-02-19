using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace WAD_Coursework_00017037.Models
{
    public class Issue
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public Severity Severity { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }

    public enum Severity
    {
        Minor,
        Major,
        Critical
    }


}
