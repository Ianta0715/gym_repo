import express from 'express';
import { appointmentRoutes, userRoutes } from './routes';

const server = express();

server.use(express.json());

// Uso de rutas //

server.use('/users', userRoutes);
server.use('/appointments', appointmentRoutes);

export default server;