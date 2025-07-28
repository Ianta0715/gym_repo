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
exports.cancelAppointment = exports.createNewAppointment = exports.returnAppointmentsByUserId = exports.returnAppointmentById = exports.returnAllAppointments = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
const appointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment);
const returnAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointmentRepository.find({ relations: ["user"] });
});
exports.returnAllAppointments = returnAllAppointments;
const returnAppointmentById = (appointmentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointmentRepository.findOne({
        where: { AppointmentId: appointmentId },
        relations: ["user"],
    });
});
exports.returnAppointmentById = returnAppointmentById;
const returnAppointmentsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointmentRepository.find({
        where: { user: { userId } },
        relations: ["user"],
    });
});
exports.returnAppointmentsByUserId = returnAppointmentsByUserId;
const createNewAppointment = (description, date, time, userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const user = yield userRepository.findOneBy({ userId });
    if (!user) {
        throw new Error(`El ID de usuario ${userId} no es válido`);
    }
    const newAppointment = appointmentRepository.create({
        description,
        date,
        time,
        user,
        status
    });
    yield appointmentRepository.save(newAppointment);
    return newAppointment;
});
exports.createNewAppointment = createNewAppointment;
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentRepository.findOneBy({ AppointmentId: id });
    if (!appointment) {
        throw new Error(`El ID de appointment ${id} no es válido`);
    }
    appointment.status = 'cancelled';
    yield appointmentRepository.save(appointment);
});
exports.cancelAppointment = cancelAppointment;
