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
        public IHttpActionResult SendEmails(History h)
        {
            //var fromAddress = new MailAddress("capstonetest2018@gmail.com", "Responder Management System");
            //const string fromPassword = "Te4!664256st";
            var fromAddress = new MailAddress("rms.capstone2018@gmail.com", "Responder Management System");
            var toAddress = new MailAddress("mracho@augusta.edu", "Volunteer Group");
            const string fromPassword = "atcharapapaya";
            const string subject = "EMERGENCY Volunteer Needed";

            //get list of email adresses
            List<Volunteer> vols = getVolunteersByEmergency(h.Emergency);
            MailAddressCollection mails = new MailAddressCollection();

            foreach (var v in vols)
            {
                mails.Add(v.Email);
            }

            //string body = System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("EmailTemplates/toVolunteers.html"));  // di mugana
            string body = File.ReadAllText(Path.Combine(HttpRuntime.AppDomainAppPath, "EmailTemplates/toVolunteer.html"));

            body = body.Replace("{emergency list}", h.Emergency);
            body = body.Replace("{date}", h.EmergencyDate);
            body = body.Replace("{time}", h.EmergencyTime);
            body = body.Replace("{streetAddress}", h.StreetAddress);
            body = body.Replace("{city}", h.City);
            body = body.Replace("{state}", h.State);
            body = body.Replace("{zipCode}", h.Zip);
            body = body.Replace("{comments}", h.Comment);

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
                foreach (var adress in mails)
                {
                    message.Bcc.Add(adress);
                }

                smtp.Send(message);
            }

            return Ok();
        }

        private List<Volunteer> getVolunteersByEmergency(string emergency)
        {
            //get all skills related to given emergency
            List<Skill> skills = DataContext.Emergencies.First(x => x.Name == emergency).Skills.ToList();
            //list of all volunteers to search through
            List<Volunteer> allVols = DataContext.Volunteers.ToList();
            //list to be output
            List<Volunteer> usingVols = new List<Volunteer>();

            foreach (Skill s in skills)
            {
                foreach (Volunteer v in allVols)
                {
                    //adds volunteer to output list, then removes from all for faster searching through later loops andprevent duplicates
                    if (v.Skills.Contains(s) && !usingVols.Contains(v))
                    {
                        usingVols.Add(v);
                        //allVols.Remove(v);
                    }
                }
                //if (allVols.Count == 0)
                //    break;
            }//end foreach
            return usingVols;
        }//end method
    }
}
