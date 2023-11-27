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
};
exports.appConfig = appConfig;
