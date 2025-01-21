using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentID { get; set; }

        [ForeignKey("Patient")]
        public int PatientID { get; set; }

        [ForeignKey("AvailabilitySchedule")]
        public int ScheduleID { get; set; }

        public int TokenNumber { get; set; }

        public string Status { get; set; }

        public string Notes { get; set; }

        public virtual Patient Patient { get; set; }

        public virtual AvailabilitySchedule AvailabilitySchedule { get; set; }
    }
}
