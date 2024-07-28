import { Request, Response } from 'express';
import { returnAllAppointments, returnAppointmentById, createNewAppointment, cancelAppointment } from '../services/appointmentService';

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await returnAllAppointments();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAppointmentById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    try {
        const appointment = await returnAppointmentById(Number(id));
        if (!appointment) {
            res.status(404).json({ message: `Appointment con ID ${id} no encontrado` });
        } else {
            res.status(200).json(appointment);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    const { date, time, userId, status } = req.body;
    try {
        const appointmentId = await createNewAppointment(new Date(date), time, userId, status);
        res.status(201).json({ AppointmentId: appointmentId });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const cancelAppointmentController = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    try {
        await cancelAppointment(Number(id));
        res.status(200).json({ message: 'Appointment cancelled successfully' });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
