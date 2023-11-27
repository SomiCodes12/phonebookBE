"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneContact = exports.viewContactCategory = exports.viewContacts = exports.createContact = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, number, category } = req.body;
        const avatar = name.charAt().toUpperCase();
        const user = yield prisma.phoneBoookModel.create({
            data: {
                name,
                number,
                category,
                avatar
            },
        });
        return res.status(200).json({
            message: "Created Contact Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Creating Contact",
            data: error.message
        });
    }
});
exports.createContact = createContact;
const viewContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield prisma.phoneBoookModel.findMany();
        return res.status(200).json({
            message: "Found Contacts Successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Finding Contacts",
            data: error.message
        });
    }
});
exports.viewContacts = viewContacts;
const viewContactCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.body;
        const data = yield prisma.phoneBoookModel.findMany({ where: { category } });
        return res.status(200).json({
            message: "Viewed Contact Category Successfully",
            data: data
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Viewing Contact Category "
        });
    }
});
exports.viewContactCategory = viewContactCategory;
const updateOneContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const { name, number, category } = req.body;
        const update = yield prisma.phoneBoookModel.update({
            where: {
                id: contactID
            },
            data: {
                name,
                number,
                category,
                avatar: name.charAt().toUpperCase()
            },
        });
        return res.status(201).json({
            message: "Updated Contact Successfully",
            data: update
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error Updating Contact",
            data: error.message
        });
    }
});
exports.updateOneContact = updateOneContact;
