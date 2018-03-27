using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class Volunteer
    {
        [Key]
        public int VolunteerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        // Insure that the telephone number has EITHER the form "###-###-####" OR "(###) ###-####"
        // RegularExpression(@"^(\([0-9]{3}\)\ |^\([0-9]{3}\)|^[0-9]{3}-)[0-9]{3}-[0-9]{4}$")]
        public string PhoneNumber { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

        public virtual ICollection<Skill> Skills { get; set; }

        public Volunteer()
        {
            Skills = new List<Skill>();
        }
    }
}