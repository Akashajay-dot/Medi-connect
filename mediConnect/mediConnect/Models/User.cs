using System.ComponentModel.DataAnnotations;

namespace mediConnect.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required, EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string PasswordHash { get; set; }

        [Required]
        public required string  Role { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string LastName { get; set; }

        public required string PhoneNumber { get; set; }

        public required string Address { get; set; }

        public required DateTime DateOfBirth { get; set; }

        public required string Gender { get; set; }
    }
}
