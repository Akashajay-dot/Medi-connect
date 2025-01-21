using mediConnect.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mediConnect.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetSlotController : ControllerBase
    {
        private readonly HealthCareContext _context;

        public GetSlotController(HealthCareContext context)
        {
            _context = context;
        }

        [HttpGet("{doctorId}/available-slots")]
        public async Task<ActionResult<IEnumerable<AvailableSlotDto>>> GetAvailableSlots(int doctorId, [FromQuery] DateTime date)
        {
            var availableSlots = await _context.AvailabilitySchedules
                .Where(s => s.ProviderID == doctorId && s.Date == date && s.Status == "Open" && s.AvailableTokens > 0)
                .Select(s => new AvailableSlotDto
                {
                    Date = s.Date,
                    StartTime = s.StartTime,
                    EndTime = s.EndTime,
                    AvailableTokens = s.AvailableTokens
                })
                .ToListAsync();

            if (availableSlots == null || availableSlots.Count == 0)
            {
                return NotFound("No available slots found for the specified date.");
            }

            return Ok(availableSlots);
        }
    }
    public class AvailableSlotDto
    {
        public DateTime Date { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int AvailableTokens { get; set; }
    }
}
