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
exports.cancelAppointmentController = exports.scheduleAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
// Obtener todos los turnos
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = (0, appointmentService_1.returnAllAppointments)(); // No es necesario await aquí ya que returnAllAppointments no es async.
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
// Obtener detalle de un turno por ID
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield (0, appointmentService_1.returnAppointmentById)(Number(id));
        if (!appointment) {
            return res.status(404).json({ message: `Turno con ID ${id} no encontrado` });
        }
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointmentById = getAppointmentById;
// Agendar un nuevo turno
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, status } = req.body;
    try {
        const appointmentId = yield (0, appointmentService_1.createNewAppointment)(new Date(date), time, userId, status);
        res.status(201).json({ message: 'Turno agendado exitosamente', appointmentId });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.scheduleAppointment = scheduleAppointment;
// Cancelar un turno
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, appointmentService_1.cancelAppointment)(Number(id));
        res.status(200).json({ message: 'Turno cancelado exitosamente' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.cancelAppointmentController = cancelAppointmentController;
