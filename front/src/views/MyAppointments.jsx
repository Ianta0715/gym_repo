import React, { useEffect, useState } from 'react';
import { appointment } from '../helpers/myAppointments';
import AppointmentCard from '../components/AppointmentCard';
import axios from 'axios';


export const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      
    axios.get('http://localhost:3000/appointments')
    .then(res => setAppointments(res.data));
    }, [])
    
  return (
    <>
     <h1>my Appointments</h1>
    
   
    {appointments.map(appointment=>( 
        <AppointmentCard key={appointment.AppointmentId} appointment={appointment}/>
    ))}
    </>
  )
}

export default MyAppointments
