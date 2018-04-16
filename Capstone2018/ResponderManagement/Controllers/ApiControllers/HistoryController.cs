using System;
using System.Collections.Generic;
using System.IO; // for File and Path
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail; // for MailAddress
using System.Web; // for HttpContext
using System.Web.Http;
using ResponderManagement.Models;
using ResponderManagement.Models.dto;

namespace ResponderManagement.Controllers.ApiControllers
{
    [RoutePrefix("api/" + AppName + "/history")]
    public class HistoryController : AppApiController
    {
        [HttpPost]
        [Route("newMessage")]
        public IHttpActionResult NewMessage(History h)
        {
            //var emergencyList = new List<Emergency>();

            var hstry = new History();
            {
                hstry.EmergencyDate = h.EmergencyDate;
                hstry.EmergencyTime = h.EmergencyTime;
                hstry.StreetAddress = h.StreetAddress;
                hstry.City = h.City;
                hstry.State = h.State;
                hstry.Zip = h.Zip;
                hstry.Comment = h.Comment;
                // emergency??
            }

            DataContext.Histories.Add(hstry);
            DataContext.SaveChanges();
            return Ok(hstry);
        }
    }
}
