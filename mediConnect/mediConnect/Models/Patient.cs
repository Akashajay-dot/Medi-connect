using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mediConnect.Models
{
    public class Patient
    {
        [Key, ForeignKey("User")]
        public int PatientID { get; set; }

        public string MedicalHistory { get; set; }

        public string EmergencyContact { get; set; }

        public virtual User User { get; set; }
    }
}
