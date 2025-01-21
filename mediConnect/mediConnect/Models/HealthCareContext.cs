using Microsoft.EntityFrameworkCore;

namespace mediConnect.Models
{
    public class HealthCareContext : DbContext
    {
        public HealthCareContext(DbContextOptions<HealthCareContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Provider> Providers { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<AvailabilityTemplate> AvailabilityTemplates { get; set; }
        public DbSet<AvailabilitySchedule> AvailabilitySchedules { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();
             modelBuilder.Entity<Patient>().HasOne(p => p.User).WithOne().HasForeignKey<Patient>(p => p.PatientID);
             modelBuilder.Entity<Provider>().HasOne(p => p.User).WithOne().HasForeignKey<Provider>(p => p.ProviderID);
             modelBuilder.Entity<Admin>().HasOne(a => a.User).WithOne().HasForeignKey<Admin>(a => a.AdminID);*/
            modelBuilder.Entity<User>()
         .HasIndex(u => u.Email).IsUnique();

            modelBuilder.Entity<Patient>()
                .HasOne(p => p.User)
                .WithOne()
                .HasForeignKey<Patient>(p => p.PatientID);

            modelBuilder.Entity<Provider>()
                .HasOne(p => p.User)
                .WithOne()
                .HasForeignKey<Provider>(p => p.ProviderID);

            modelBuilder.Entity<Admin>()
                .HasOne(a => a.User)
                .WithOne()
                .HasForeignKey<Admin>(a => a.AdminID);

            // Set up foreign key constraints with NO ACTION
            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Patient)
                .WithMany() // Assuming patients can have many appointments
                .HasForeignKey(a => a.PatientID)
                .OnDelete(DeleteBehavior.Restrict); // Change to Restrict or SetNull

            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.AvailabilitySchedule)
                .WithMany() // Assuming each schedule can have many appointments
                .HasForeignKey(a => a.ScheduleID)
                .OnDelete(DeleteBehavior.Restrict); // Change to Restrict or SetNull
        }
    }
}
