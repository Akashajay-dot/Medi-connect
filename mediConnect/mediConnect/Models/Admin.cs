using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class Admin
    {
        [Key, ForeignKey("User")]
        public int AdminID { get; set; }

        [ForeignKey("Hospital")]
        public int HospitalID { get; set; }

        public virtual User User { get; set; }

        public virtual Hospital Hospital { get; set; }
    }
}
