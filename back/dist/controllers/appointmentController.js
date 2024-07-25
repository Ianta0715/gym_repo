"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
const getAllAppointments = (req, res) => {
    res.send('Obteniendo el listado de todos los turnos de todos los usuarios');
};
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (req, res) => {
    res.send(`Obteniendo el detalle del turno con ID ${req.query.id}`);
};
exports.getAppointmentById = getAppointmentById;
const scheduleAppointment = (req, res) => {
    res.send('Agendando un nuevo turno');
};
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => {
    res.send('Cambiando el estatus del turno a “cancelled”');
};
exports.cancelAppointment = cancelAppointment;
