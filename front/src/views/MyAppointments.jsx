import React, { useState } from 'react'
import { appointment } from '../helpers/myAppointments'
import AppointmentCard from '../components/AppointmentCard'

export const MyAppointments = () => {
    const [appointments, setAppointments] = useState(appointment)
  return (
    <>
    <h1>mis turnos</h1>
    {appointments.map((appointment,index)=>( 
        <AppointmentCard key={index} appointment={appointment}/>
    ))}
    </>
  )
}

export default MyAppointments
