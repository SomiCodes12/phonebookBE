import { Router } from "express";
import { createContact, updateOneContact, viewContactCategory, viewContacts } from "../Controllers/phoneBookController";

const router = Router()

router.route("/create-contact").post(createContact);
router.route("/view-contacts").get(viewContacts);
router.route("/view-contact-category").get(viewContactCategory);
router.route("/:contactID/update-one-contact").patch(updateOneContact);

export default router