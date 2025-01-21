using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class Provider
    {
        [Key, ForeignKey("User")]
        public int ProviderID { get; set; }

        [ForeignKey("Hospital")]
        public int HospitalID { get; set; }

        public string Specialty { get; set; }

        public string Qualifications { get; set; }

        public decimal ConsultationFee { get; set; }

        public virtual User User { get; set; }

        public virtual Hospital Hospital { get; set; }
    }
}
