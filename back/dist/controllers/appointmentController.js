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
exports.cancelAppointmentController = exports.scheduleAppointment = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const emailService_1 = require("../services/emailService");
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.returnAllAppointments)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const appointments = yield (0, appointmentService_1.returnAppointmentsByUserId)(Number(userId));
        if (!appointments.length) {
            res.status(404).json({ message: `No appointments found for user with ID ${userId}` });
        }
        else {
            res.status(200).json(appointments);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const { description, date, time, userId, status } = req.body;
    try {
        const newAppointment = yield (0, appointmentService_1.createNewAppointment)(description, new Date(date), time, userId, status);
        // Recuperar el correo del usuario
        const user = yield userRepository.findOne({
            where: { userId },
        });
        if (!user) {
            return res.status(404).json({ message: `User ID ${userId} no encontrado` });
        }
        const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
                <h1>Confirmación de Turno</h1>
            </div>
            <div style="padding: 20px; line-height: 1.6;">
                <p style="font-size: 16px; color: #555;">Hola,</p>
                <p style="font-size: 16px; color: #555;">Tu turno ha sido agendado exitosamente con los siguientes detalles:</p>
                <p><strong>Descripción:</strong> ${description}</p>
                <p><strong>Fecha:</strong> ${new Date(date).toLocaleDateString()}</p>
                <p><strong>Hora:</strong> ${time}</p>
                <p style="font-size: 16px; color: #555;">Gracias por utilizar nuestra aplicación. Si tienes alguna pregunta, no dudes en contactarnos.</p>
            </div>
            <div style="background-color: #f9f9f9; text-align: center; padding: 10px; font-size: 14px; color: #777;">
                <p>&copy; ${new Date().getFullYear()} BOX FIT. Todos los derechos reservados.</p>
            </div>
        </div>
        `;
        yield (0, emailService_1.enviarCorreo)(user.email, 'Confirmación de Turno', emailHtml);
        res.status(200).json(newAppointment);
    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error al enviar el correo.', error: error.message });
    }
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const { id } = req.params;
    try {
        // Obtener la cita por ID (asumiendo que devuelve un solo objeto)
        const appointment = yield (0, appointmentService_1.returnAppointmentById)(Number(id));
        if (!appointment) {
            return res.status(404).json({ message: `Appointment ID ${id} no encontrado` });
        }
        // Acceder al ID del usuario desde la cita y buscar al usuario
        const userId = appointment.user.userId;
        const user = yield userRepository.findOne({
            where: { userId },
        });
        if (!user) {
            return res.status(404).json({ message: `Usuario con ID ${userId} no encontrado` });
        }
        // Cancelar la cita
        yield (0, appointmentService_1.cancelAppointment)(Number(id));
        // Crear el contenido del correo
        const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #f44336; color: white; padding: 20px; text-align: center;">
                <h1>Turno Cancelado</h1>
            </div>
            <div style="padding: 20px; line-height: 1.6;">
                <p style="font-size: 16px; color: #555;">Hola,</p>
                <p style="font-size: 16px; color: #555;">Lamentamos informarte que tu turno ha sido cancelado. A continuación, los detalles del turno cancelado:</p>
                <p><strong>Descripción:</strong> ${appointment.description}</p>
                <p><strong>Fecha:</strong> ${new Date(appointment.date).toLocaleDateString()}</p>
                <p><strong>Hora:</strong> ${appointment.time}</p>
                <p style="font-size: 16px; color: #555;">Si necesitas reprogramar tu turno, no dudes en contactarnos. Gracias por usar nuestra aplicación.</p>
            </div>
            <div style="background-color: #f9f9f9; text-align: center; padding: 10px; font-size: 14px; color: #777;">
                <p>&copy; ${new Date().getFullYear()} Nuestra Empresa. Todos los derechos reservados.</p>
            </div>
        </div>
        `;
        // Enviar el correo al usuario
        yield (0, emailService_1.enviarCorreo)(user.email, 'Confirmación de Cancelación de Turno', emailHtml);
        console.log("mail enviado");
        res.status(200).json({ message: 'Appointment cancelled successfully' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.cancelAppointmentController = cancelAppointmentController;
