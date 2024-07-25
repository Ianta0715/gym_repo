import { Request, Response } from 'express';

export const getAllAppointments = (req: Request, res: Response) => {
  res.send('Obteniendo el listado de todos los turnos de todos los usuarios');
};

export const getAppointmentById = (req: Request, res: Response) => {
  res.send(`Obteniendo el detalle del turno con ID ${req.query.id}`);
};

export const scheduleAppointment = (req: Request, res: Response) => {
  res.send('Agendando un nuevo turno');
};

export const cancelAppointment = (req: Request, res: Response) => {
  res.send('Cambiando el estatus del turno a “cancelled”');
};
