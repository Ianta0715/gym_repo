import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.send('Obteniendo el listado de todos los usuarios');
};

export const getUserById = (req: Request, res: Response) => {
  res.send(`Obteniendo el detalle del usuario con ID ${req.params.id}`);
};

export const registerUser = (req: Request, res: Response) => {
  res.send('Registrando un nuevo usuario');
};

export const loginUser = (req: Request, res: Response) => {
  res.send('Login del usuario');
};
