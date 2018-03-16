using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class Skill
    {
        [Key]
        public int SkillID { get; set; }
        public string Name { get; set; }
    }
}