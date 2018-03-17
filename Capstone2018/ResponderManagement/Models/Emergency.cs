﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ResponderManagement.Models
{
    public class Emergency
    {
        [Key]
        public int EmergencyID { get; set; }
        public string Name { get; set; }
    }
}