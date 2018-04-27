namespace ResponderManagement.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class DataContext : DbContext
    {
        public DataContext()
            : base("name=DefaultConnection")
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Emergency> Emergencies { get; set; }
        public virtual DbSet<History> Histories { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<Volunteer> Volunteers { get; set; }
    }
}