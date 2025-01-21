using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class AvailabilitySchedule
    {
        [Key]
        public int ScheduleID { get; set; }

        [ForeignKey("Provider")]
        public int ProviderID { get; set; }

        public DateTime Date { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }

        public int MaxTokens { get; set; }

        public int AvailableTokens { get; set; }

        public string Status { get; set; }

        public virtual Provider Provider { get; set; }
    }
}
