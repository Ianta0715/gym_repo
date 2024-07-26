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
exports.cancelAppointment = exports.createNewAppointment = exports.returnAppointmentById = exports.returnAllAppointments = void 0;
const userService_1 = require("./userService"); // Asegúrate de que esta importación sea correcta.
let appointments = [];
let nextAppointmentId = 1;
// Obtener todos los turnos
const returnAllAppointments = () => {
    return appointments;
};
exports.returnAllAppointments = returnAllAppointments;
// Obtener un turno por ID
const returnAppointmentById = (id) => {
    return appointments.find(appointment => appointment.AppointmentId === id);
};
exports.returnAppointmentById = returnAppointmentById;
// Crear un nuevo turno
const createNewAppointment = (date, time, userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    // Esperar a que la promesa devuelva el resultado
    const users = yield (0, userService_1.returnAllUsers)();
    const userExists = users.some(user => user.userId === userId);
    if (!userExists) {
        throw new Error(`El ID de usuario ${userId} no es válido`);
    }
    const newAppointment = {
        AppointmentId: nextAppointmentId++,
        date,
        time,
        userId,
        status
    };
    appointments.push(newAppointment);
    return newAppointment.AppointmentId;
});
exports.createNewAppointment = createNewAppointment;
// Cambiar el estado de un turno a "cancelled"
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = appointments.find(app => app.AppointmentId === id);
    if (!appointment) {
        throw new Error(`Turno con ID ${id} no encontrado`);
    }
    appointment.status = 'cancelled';
});
exports.cancelAppointment = cancelAppointment;
