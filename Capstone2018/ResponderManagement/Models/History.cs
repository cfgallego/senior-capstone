using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class History
    {
        [Key]
        public int HistoryID { get; set; }
        public string EmergencyDate { get; set; }
        public string EmergencyTime { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Comment { get; set; }
        public string Emergency { get; set; } // Emergency list
    }
}