using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class Hospital
    {
        [Key]
        public int HospitalID { get; set; }

        [Required]
        public string Name { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Website { get; set; }

        public string AccreditationStatus { get; set; }
    }
}
