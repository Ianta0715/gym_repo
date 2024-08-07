import { Router } from 'express';
import { getAllAppointments, getAppointmentsById, scheduleAppointment, cancelAppointmentController } from '../controllers/appointmentController';

const router:Router = Router();

router.get('/', getAllAppointments); 
router.get('/user/:userId', getAppointmentsById); 
router.post('/', scheduleAppointment);
router.put('/cancel/:id', cancelAppointmentController);

export default router;
