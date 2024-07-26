import { Request, Response } from 'express';
import { cancelAppointment, createNewAppointment, returnAllAppointments, returnAppointmentById } from '../services/appointmentService';


// Obtener todos los turnos
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = returnAllAppointments(); // No es necesario await aquí ya que returnAllAppointments no es async.
    res.status(200).json(appointments);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener detalle de un turno por ID
export const getAppointmentById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await returnAppointmentById(Number(id));
    if (!appointment) {
      return res.status(404).json({ message: `Turno con ID ${id} no encontrado` });
    }
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Agendar un nuevo turno
export const scheduleAppointment = async (req: Request<{},{}, { date: Date, time: string, userId: number, status: 'active' | 'cancelled' }>, res: Response) => {
  const { date, time, userId, status } = req.body;
  try {
    const appointmentId = await createNewAppointment(new Date(date), time, userId, status);
    res.status(201).json({ message: 'Turno agendado exitosamente', appointmentId });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Cancelar un turno
export const cancelAppointmentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointmentId = Number(id);
    await cancelAppointment(appointmentId);
    res.status(200).json({ message: `Turno con ID ${appointmentId} cancelado` });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};