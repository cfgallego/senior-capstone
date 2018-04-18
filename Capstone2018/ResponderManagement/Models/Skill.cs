using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class Skill : IEquatable<Skill>
    {
        [Key]
        public int SkillID { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Volunteer> Volunteers { get; set; }
        public virtual ICollection<Emergency> Emergencies { get; set; }

        public Skill()
        {
            //Volunteers = new List<Volunteer>();
            //Emergencies = new List<Emergency>();
        }

        public bool Equals(Skill s)
        {
            return (s.SkillID == this.SkillID);
        }
    }
}