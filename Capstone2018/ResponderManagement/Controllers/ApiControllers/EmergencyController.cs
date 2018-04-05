using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
    }
}
