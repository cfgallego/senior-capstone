using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ResponderManagement.Startup))]
namespace ResponderManagement
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
