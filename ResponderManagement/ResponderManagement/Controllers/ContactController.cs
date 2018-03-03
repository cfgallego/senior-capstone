using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ResponderManagement.Models;
using System.Text.RegularExpressions;

namespace ResponderManagement.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact
        public ActionResult SearchContact()
        {
            return View();
        }

        public ActionResult AddContact()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddContact(AddContact model)
        {
            // form validation - SelfPromo3 task 2.4
            if (string.IsNullOrWhiteSpace(model.FirstName) == true)
            {
                ModelState.AddModelError("FirstName", "First name is required.");
            }

            if (string.IsNullOrWhiteSpace(model.LastName) == true)
            {
                ModelState.AddModelError("LastName", "Last name is required.");
            }

            if (string.IsNullOrWhiteSpace(model.Email) == true)
            {
                ModelState.AddModelError("Email", "Email is required.");
            }



            if (ModelState.IsValid)
            {
                using (var contact = new Context())
                {
                    contact.Contacts.Add(model);
                    contact.SaveChanges();
                }

                return RedirectToAction("AddConfirmation");
            }

            return View(model);
        }

        public ActionResult AddConfirmation()
        {
            return View();
        }

        public ActionResult ShowContacts()
        {
            ShowContacts model = new ShowContacts();

            Context element = new Context();
            foreach (var elm in element.Contacts)
            {
                model.Contacts.Add(elm);
            }

            return View(model);
        }
    }
}