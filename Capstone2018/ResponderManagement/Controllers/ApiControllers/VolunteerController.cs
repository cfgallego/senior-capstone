using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using ResponderManagement.Models;

namespace ResponderManagement.Controllers.ApiControllers
{
    [RoutePrefix("api/" + AppName + "/volunteers")]
    public class VolunteerController : AppApiController
    {
        // Create (add) Volunteer
        [HttpPost]
        [Route("addVolunteer")]
        public void AddVolunteer(Volunteer v)
        {
            var vol = new Volunteer();
            {
                vol.FirstName = v.FirstName;
                vol.LastName = v.LastName;
                vol.PhoneNumber = v.PhoneNumber;
                vol.Email = v.Email;
                vol.StreetAddress = v.StreetAddress;
                vol.City = v.City;
                vol.State = v.State;
                vol.ZipCode = v.ZipCode;
            }

            DataContext.Volunteers.Add(vol);
            DataContext.SaveChanges();
        }

        // Read (view) Volunteer
        [Route("getVolunteers")] // get all volunteers in the database 
        public IHttpActionResult GetVolunteers()
        {
            // pulls all volunteers from database
            var volunteers = DataContext.Volunteers.OrderBy(x => x.FirstName).ToList();
            return Ok(volunteers);
        }

        //[HttpGet]
        //[Route("getVolunteer")]
        //public IHttpActionResult GetVolunteerByName (string name)
        //{
        //    var vol = DataContext.Volunteers.Find(name);

        //    if (vol != null)
        //    {
        //        var request = new
        //        {
        //            id = vol.VolunteerID,
        //            firstName = vol.FirstName,
        //            lastName = vol.LastName,
        //            phoneNumber = vol.PhoneNumber,
        //            email = vol.Email,
        //            streetAddress = vol.StreetAddress,
        //            city = vol.City,
        //            state = vol.State,
        //            zipCode = vol.ZipCode
        //        };

        //        return Ok(request);
        //    }

        //    else
        //    {
        //        var error = "No match found";
        //        return Ok(error);
        //    }
        //}

        // Update (edit) Volunteer

        // Delete Volunteer
    }
}
