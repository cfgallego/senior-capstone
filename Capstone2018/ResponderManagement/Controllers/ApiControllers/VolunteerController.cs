using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using ResponderManagement.Models;
using ResponderManagement.Models.dto;

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
            //var skills = DataContext.Skills;
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
                        //skillList.Add(new Skill() { Name = s.Name });
                        skillList.Add(DataContext.Skills.Find(s.SkillID));
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
        [Route("getVolunteers")]
        public IHttpActionResult GetVolunteers()
        {
            // pulls all volunteers from database
            //var volunteers = DataContext.Volunteers.OrderBy(x => x.FirstName).ThenBy(x => x.LastName).ToList();
            //return Ok(volunteers);

            var volunteers = DataContext.Volunteers.ToList();
            var volList = new List<VolunteerDTO>();
            foreach (var v in volunteers)
            {
                //v.Skills = (from vol in volunteers
                //            from s in skill
                //            where vol.Skills.Contains(s)
                //            select s).ToList();

                var dto = new VolunteerDTO();
                {
                    dto.VolunteerID = v.VolunteerID;
                    dto.FirstName = v.FirstName;
                    dto.LastName = v.LastName;
                    dto.Email = v.Email;
                    dto.PhoneNumber = v.PhoneNumber;
                    dto.StreetAddress = v.StreetAddress;
                    dto.City = v.City;
                    dto.State = v.State;
                    dto.ZipCode = v.ZipCode;
                };

                volList.Add(dto);
            }
            return Ok(volList);
        }

        [HttpGet]
        [Route("getVolunteerByID")]
        public IHttpActionResult GetVolunteerByID(int id)
        {
            var vol = DataContext.Volunteers.First(x => x.VolunteerID == id);
            return Ok(vol);
        }


        // ----------------------
        [HttpGet]
        [Route("getVolunteersByEmergency")]
        public IHttpActionResult GetVolunteersByEmergency(string emergency)
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
            return Ok(usingVols);
        }
        // ----------------------



        // Update (edit) Volunteer
        [HttpPut]
        [Route("updateVolunteer")]
        public IHttpActionResult UpdateVolunteer(Volunteer v)
        {
            var skillList = new List<Skill>();
            Volunteer vol = DataContext.Volunteers.Find(v.VolunteerID);

            vol.FirstName = v.FirstName;
            vol.LastName = v.LastName;
            vol.PhoneNumber = v.PhoneNumber;
            vol.Email = v.Email;
            vol.StreetAddress = v.StreetAddress;
            vol.City = v.City;
            vol.State = v.State;
            vol.ZipCode = v.ZipCode;
            foreach (var s in v.Skills)
            {
                if (s.Name != null)
                {
                    //if (vol.Skills.Contains(s))
                        //continue;

                    //skillList.Add(new Skill() { Name = s.Name });
                    skillList.Add(DataContext.Skills.Find(s.SkillID));
                }
            }
            vol.Skills = skillList;

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
