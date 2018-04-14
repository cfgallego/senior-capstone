using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ResponderManagement.Models.dto
{
    public class VolunteerDTO
    {
        public int VolunteerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
    }
}