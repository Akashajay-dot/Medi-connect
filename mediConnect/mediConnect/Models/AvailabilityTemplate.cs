using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class AvailabilityTemplate
    {
        [Key]
        public int TemplateID { get; set; }

        [ForeignKey("Provider")]
        public int ProviderID { get; set; }

        public int DayOfWeek { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }

        public int MaxTokensPerHour { get; set; }

        public virtual Provider Provider { get; set; }
    }
}
