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
    public class AppApiController : ApiController
    {
        protected const string AppName = "ResponderManagement";
        protected readonly DataContext DataContext;

        public AppApiController()
        {
            DataContext = new DataContext();
        }
    }
}
