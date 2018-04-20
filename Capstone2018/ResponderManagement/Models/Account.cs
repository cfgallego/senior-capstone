using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class Account
    {
        [Key]
        public int DirectoryID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}