using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Grid.Controllers
{
    public class HomeController : Controller
    {
        UserEntities _context = new UserEntities();
        // GET: Home
        
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetUser()
        {
            return Json(this._context.User.ToList(), JsonRequestBehavior.AllowGet);
        }

    }
}