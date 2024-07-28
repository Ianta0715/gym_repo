interface IAppointment {
    AppointmentId:number,
    date: Date,
    time: string,
    userId: number,
    status: 'active' | 'cancelled'
}

export default IAppointment;