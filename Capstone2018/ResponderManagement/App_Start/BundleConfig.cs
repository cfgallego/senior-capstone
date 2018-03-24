using System.Web;
using System.Web.Optimization;

namespace ResponderManagement
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/controllers")
              .IncludeDirectory("~/ScriptsAppSpecific/controllers", "*.js", searchSubdirectories: false));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/ui-bootstrap-csp.css",
                "~/Content/ui-grid.css",
                "~/Content/bootstrap.css",
                "~/Content/sweetalert.css",
                "~/Content/Site.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/all").Include(
                "~/Scripts/angular/angular.js",
                "~/Scripts/angular/angular-animate.js",
                "~/Scripts/angular/angular-route.js",
                "~/Scripts/angular-ui/ui-bootstrap.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                "~/Scripts/angular-ui/ui-grid.js",
                "~/Scripts/jquery-3.3.1.js",
                "~/Scripts/moment.js",
                "~/Scripts/angular-ui/calendar.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/umd/popper.js",
                "~/Scripts/sweetalert.min.js",
                "~/ScriptsAppSpecific/main.js"
                ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                                    "~/Scripts/modernizr-*"));
        }
    }
}
