import Appointment from "../interfaces/IAppointment";
import { returnAllUsers } from "./userService";

let appointments:Appointment[] = [];
let nextAppointmentId = 1;

const returnAllAppointments = () => {
return appointments;
};

const returnAppointmentById = (id:number) => {
 return appointments.find(appointment => appointment.AppointmentId === id);
};

const createNewAppointment = ( date: Date,time: string,userId: number,status:'active' | 'cancelled'):number => {
    const userExist = returnAllUsers().some(user =>user.userId === userId);
    if(!userExist){
        throw new Error(`El ID de usuario ${userId} no es valido`);
    };

    const newAppointment:Appointment = {
        AppointmentId:nextAppointmentId,
        date,
        time,
        userId,
        status
    };
    appointments.push(newAppointment);
    return newAppointment.AppointmentId;

}