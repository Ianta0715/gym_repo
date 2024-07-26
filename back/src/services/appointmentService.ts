import Appointment from '../interfaces/IAppointment';
import { returnAllUsers } from './userService';  // Asegúrate de que esta importación sea correcta.

let appointments: Appointment[] = [];
let nextAppointmentId = 1;

// Obtener todos los turnos
export const returnAllAppointments = (): Appointment[] => {
    return appointments;
};

// Obtener un turno por ID
export const returnAppointmentById = (id: number): Appointment | undefined => {
    return appointments.find(appointment => appointment.AppointmentId === id);
};

// Crear un nuevo turno
export const createNewAppointment = async (date: Date, time: string, userId: number, status: 'active' | 'cancelled'): Promise<number> => {
    // Esperar a que la promesa devuelva el resultado
    const users = await returnAllUsers();

    const userExists = users.some(user => user.userId === userId);
    if (!userExists) {
        throw new Error(`El ID de usuario ${userId} no es válido`);
    }

    const newAppointment: Appointment = {
        AppointmentId: nextAppointmentId++,
        date,
        time,
        userId,
        status
    };
    appointments.push(newAppointment);
    return newAppointment.AppointmentId;
};

// Cambiar el estado de un turno a "cancelled"
export const cancelAppointment = async (id: number): Promise<void> => {
    const appointment = appointments.find(app => app.AppointmentId === id);
    if (!appointment) {
        throw new Error(`Turno con ID ${id} no encontrado`);
    }
    appointment.status = 'cancelled';
};
