using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Wen.MvcSinglePage.Controllers
{
    public class DemoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
