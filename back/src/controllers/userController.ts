import { Request, Response } from 'express';
import User from '../interfaces/IUser';
import Credential from '../interfaces/ICredential';
import { createNewUser, returnAllUsers, returnUserById } from '../services/userService';
import { NewUserRequest } from '../interfaces/newUserRequest';
import { validateCredential } from '../services/credentialService';

export const getAllUsers = async(req: Request, res: Response) => {
  try {
    const users = await returnAllUsers();
    res.status(200).json(users);
  } catch (error:any) {
    res.status(400).json({message:error.message})
  }
};

export const getUserById = async(req: Request<{id:string}>, res: Response) => {
  const {id} = req.params;
  try {
    const user = await returnUserById(Number(id));
    res.status(200).json(user);
  } catch (error:any) {
    res.status(400).json({message:error.message})
    
  }
};

export const registerUser = async (req: Request<{},{},NewUserRequest>, res: Response) => {
  const { name, email, birthday, nDni, username, password } = req.body;
  try {
      const userId = createNewUser(name, email, new Date(birthday), nDni, username, password);
      res.status(201).json({ message: 'Usuario registrado exitosamente', userId });
  } catch (error: any) {
      res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req: Request<{},{},Credential>, res: Response) => {
  const { username, password } = req.body;
  try {
      const credentialId = validateCredential(username, password);
      if (credentialId !== null) {
          res.status(200).json({ message: 'Login exitoso', credentialId });
      } else {
          res.status(401).json({ message: 'Credenciales inválidas' });
      }
  } catch (error: any) {
      res.status(400).json({ message: error.message });
  }
};
