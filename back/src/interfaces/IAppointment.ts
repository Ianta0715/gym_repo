
export enum AppointmentStatus {
    ACTTIVE = "active",
    CANCELLED = "cancelled"
}
interface IAppointment {
    AppointmentId:number,
    description:string, 
    date: Date,
    time: string,
    userId: number,
    status: 'active' | 'cancelled'
}

export default IAppointment;