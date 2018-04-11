using System;
using System.Collections.Generic;
using System.IO; // for File and Path?
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail; // for MailAddress?
using System.Web; // for HttpContext?
using System.Web.Http;
using ResponderManagement.Models;

namespace ResponderManagement.Controllers.ApiControllers
{
    [RoutePrefix("api/" + AppName + "/emergencies")]
    public class EmergencyController : AppApiController
    {
        // Read (view) Emergencies
        [HttpGet]
        [Route("getEmergencies")]
        public IHttpActionResult GetEmergencies()
        {
            var emregencies = DataContext.Emergencies.OrderBy(x => x.Name).ToList();
            return Ok(emregencies);
        }

        // TEST send email
        [HttpPost]
        [Route("sendEmails")]
        public IHttpActionResult SendEmails()
        {
            var fromAddress = new MailAddress("capstonetest2018@gmail.com", "Responder Management System");
            var toAddress = new MailAddress("mracho@augusta.edu", "Volunteer Group");
            const string fromPassword = "Te4!664256st";
            const string subject = "test";
            //string body = System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("EmailTemplates/toVolunteers.html"));
            //string body = "test email";
            string body = File.ReadAllText(Path.Combine(HttpRuntime.AppDomainAppPath, "EmailTemplates/toVolunteer.html"));

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                Timeout = 20000

            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                IsBodyHtml = true,
                Body = body
            })
            {
                smtp.Send(message);
            }

            return Ok();
        }
    }
}
