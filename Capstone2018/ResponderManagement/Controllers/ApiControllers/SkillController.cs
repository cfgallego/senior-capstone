using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ResponderManagement.Models;

namespace ResponderManagement.Controllers.ApiControllers
{
    [RoutePrefix("api/" + AppName + "/skills")]
    public class SkillController : AppApiController
    {
        [HttpGet]
        [Route("getSkills")]
        public IHttpActionResult GetSkills()
        {
            var skills = DataContext.Skills.OrderBy(x => x.Name).ToList();
            return Ok(skills);
        }
    }
}
