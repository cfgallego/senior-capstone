using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ResponderManagement.Models
{
    public class ShowContacts
    {
        public List<AddContact> Contacts { get; set; }

        public ShowContacts()
        {
            Contacts = new List<AddContact>();
        }
    }
}