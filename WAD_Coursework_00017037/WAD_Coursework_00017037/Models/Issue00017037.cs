using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WAD_Coursework_00017037.Models
{
    public class Issue00017037
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public Severity00017037 Severity { get; set; }

        public virtual ICollection<Comment00017037> Comments { get; set; } = new List<Comment00017037>();
    }

    public enum Severity00017037
    {
        Minor,
        Major,
        Critical
    }


}
