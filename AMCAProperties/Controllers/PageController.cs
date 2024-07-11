using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AMCAProperties.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return View();
        }

        [Route("about-us")]
        public ActionResult About()
        {
            return View();
        }

        [Route("contact-us")]
        public ActionResult Contact()
        {
            return View();
        }
    }
}