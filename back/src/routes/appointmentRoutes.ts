import { Router } from 'express';
import { getAllAppointments, getAppointmentById, scheduleAppointment, cancelAppointmentController } from '../controllers/appointmentController';

const router:Router = Router();

router.get('/', getAllAppointments); 
router.get('/:id', getAppointmentById); 
router.post('/', scheduleAppointment);
router.put('/:id/cancel', cancelAppointmentController);

export default router;
