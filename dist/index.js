"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mainApp_1 = require("./mainApp");
dotenv_1.default.config();
const port = parseInt(process.env.PORT);
const app = (0, express_1.default)();
(0, mainApp_1.appConfig)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.log("Server Is Up and Running");
});
process.on("uncaughtException", (error) => {
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
