"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phoneBookController_1 = require("../Controllers/phoneBookController");
const router = (0, express_1.Router)();
router.route("/create-contact").post(phoneBookController_1.createContact);
router.route("/view-contacts").get(phoneBookController_1.viewContacts);
router.route("/view-contact-category").get(phoneBookController_1.viewContactCategory);
router.route("/:contactID/update-one-contact").patch(phoneBookController_1.updateOneContact);
exports.default = router;