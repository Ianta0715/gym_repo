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

export const getAppointmentsById = async (req: Request<{ userId: string }>, res: Response) => {
    const { userId } = req.params;
    try {
        const appointments = await returnAppointmentById(Number(userId));
        if (!appointments.length) {
            res.status(404).json({ message:  `No appointments found for user with ID ${userId}`  });
        } else {
            res.status(200).json(appointments);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    const { description , date, time, userId, status } = req.body;
    try {
        const newAppointment = await createNewAppointment(description,new Date(date), time, userId, status);
        res.status(201).json(newAppointment);
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
