"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const phoneBookRouter_1 = __importDefault(require("./Routers/phoneBookRouter"));
const appConfig = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/api/v1", phoneBookRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "Welcome to Our PhoneBook App 😊😊"
            });
        }
        catch (error) {
            return res.status(400).json({
                message: "An Error Occured",
                reason: error.message
            });
        }
    });
};
exports.appConfig = appConfig;
