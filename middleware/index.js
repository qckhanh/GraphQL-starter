"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applyGlobalMiddleware = (app) => {
    app.use(express_1.default.static('public'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
};
exports.default = applyGlobalMiddleware;
