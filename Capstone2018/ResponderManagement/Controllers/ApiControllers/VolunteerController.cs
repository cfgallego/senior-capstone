﻿using System;
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
        public IHttpActionResult AddVolunteer(Volunteer v)
        {
            var skills = DataContext.Skills;
            var skillList = new List<Skill>();

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
                // vol.Skills = v.Skills;
                foreach (var s in v.Skills)
                {
                    if (s.Name != null)
                    {
                        skillList.Add(new Skill() { Name = s.Name });
                    }
                }
                vol.Skills = skillList;
            }

            DataContext.Volunteers.Add(vol); // v?
            DataContext.SaveChanges();
            return Ok(vol); // v?
        }

        // Read (view) Volunteer
        [HttpGet]
        [Route("getVolunteers")] // get all volunteers in the database 
        public IHttpActionResult GetVolunteers()
        {
            // pulls all volunteers from database
            //var volunteers = DataContext.Volunteers.OrderBy(x => x.FirstName).ToList();
            var volunteers = DataContext.Volunteers.OrderBy(x => x.FirstName).ThenBy(x => x.LastName).ToList();
            return Ok(volunteers);
        }

        [HttpGet]
        [Route("getVolunteerByID")]
        public IHttpActionResult GetVolunteerByID(int id)
        {
            var vol = DataContext.Volunteers.First(x => x.VolunteerID == id);
            return Ok(vol);
        }

        //[HttpGet]
        //[Route("getVolunteerByName")]
        //public IHttpActionResult GetVolunteerByName(string name)
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
        [HttpPut]
        [Route("editVolunteer")]
        public IHttpActionResult EditVolunteer(Volunteer v)
        {
            Volunteer vol = DataContext.Volunteers.Find(v.VolunteerID);

            vol.FirstName = v.FirstName;
            vol.LastName = v.LastName;
            vol.PhoneNumber = v.PhoneNumber;
            vol.Email = v.Email;
            vol.StreetAddress = v.StreetAddress;
            vol.City = v.City;
            vol.State = v.State;
            vol.ZipCode = v.ZipCode;

            DataContext.SaveChanges();
            return Ok(vol); // v?
        }


        // Delete Volunteer
        [HttpDelete]
        [Route("deleteVolunteer")]
        public void DeleteVolunteer(int id)
        {
            Volunteer vol = DataContext.Volunteers.Find(id);

            DataContext.Volunteers.Remove(vol);
            DataContext.SaveChanges();
        }
    }
}
