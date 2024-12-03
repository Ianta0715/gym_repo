import { AppDataSource } from '../config/data-source';
import { Appointment } from '../entities/Appointment';
import { User } from '../entities/User';

const appointmentRepository = AppDataSource.getRepository(Appointment);

export const returnAllAppointments = async (): Promise<Appointment[]> => {
    return await appointmentRepository.find({ relations: ["user"] });
};

export const returnAppointmentById = async (appointmentId: number): Promise<Appointment | null> => {
    return await appointmentRepository.findOne({
        where: { AppointmentId: appointmentId },
        relations: ["user"],
    });
};

export const returnAppointmentsByUserId = async (userId: number): Promise<Appointment[]> => {
    return await appointmentRepository.find({
        where: { user: { userId } },
        relations: ["user"],
    });
};

export const createNewAppointment = async (description:string , date: Date, time: string, userId: number, status: 'active' | 'cancelled'): Promise<Appointment> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ userId });

    if (!user) {
        throw new Error(`El ID de usuario ${userId} no es válido`);
    }

    const newAppointment = appointmentRepository.create({
        description,
        date,
        time,
        user,
        status
    });

    await appointmentRepository.save(newAppointment);
    return newAppointment;
};

export const cancelAppointment = async (id: number): Promise<void> => {
    const appointment = await appointmentRepository.findOneBy({ AppointmentId: id });

    if (!appointment) {
        throw new Error(`El ID de appointment ${id} no es válido`);
    }

    appointment.status = 'cancelled';
    await appointmentRepository.save(appointment);
};
