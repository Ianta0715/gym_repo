"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
server.use(express_1.default.json());
// Uso de rutas //
server.use('/users', routes_1.userRoutes);
server.use('/appointments', routes_1.appointmentRoutes);
exports.default = server;
