using mediConnect.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mediConnect.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly HealthCareContext _context;

        public AppointmentController(HealthCareContext context)
        {
            _context = context;
        }
        [HttpPost("book")]
        public async Task<ActionResult> BookSlot([FromBody] BookSlotRequest request)
        {
            // Check if the schedule slot exists and is open
            var schedule = await _context.AvailabilitySchedules
                .FirstOrDefaultAsync(s => s.ScheduleID == request.ScheduleID && s.Status == "Open");

            if (schedule == null)
            {
                return NotFound("The selected schedule slot is not available.");
            }

            // Check if there are available tokens in the slot
            if (schedule.AvailableTokens <= 0)
            {
                return BadRequest("No available tokens for the selected slot.");
            }

            // Check if the patient has already booked the slot
            var existingAppointment = await _context.Appointments
                .FirstOrDefaultAsync(a => a.PatientID == request.PatientID && a.ScheduleID == request.ScheduleID);

            if (existingAppointment != null)
            {
                return BadRequest("The patient has already booked this slot.");
            }

            // Create a new appointment
            var appointment = new Appointment
            {
                PatientID = request.PatientID,
                ScheduleID = request.ScheduleID,
                TokenNumber = schedule.MaxTokens - schedule.AvailableTokens + 1,
                Status = "Scheduled",
                Notes = ""
            };

            // Save the appointment and update the slot's available tokens
            _context.Appointments.Add(appointment);
            schedule.AvailableTokens -= 1;

            await _context.SaveChangesAsync();

            return Ok("Slot successfully booked.");
        }
    }
    public class BookSlotRequest
    {
        public int PatientID { get; set; }
        public int ScheduleID { get; set; }
    }
}
