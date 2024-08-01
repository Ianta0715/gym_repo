import React from 'react';

export default function AppointmentCard({appointment}) {
  return (
    <>
    <h2>Turno #{appointment.id}</h2>
      <p><strong>Fecha:</strong> {appointment.date}</p>
      <p><strong>Hora:</strong> {appointment.time}</p>
      <p><strong>Descripción:</strong> {appointment.description}</p>
      <p><strong>Estado:</strong> {appointment.status}</p>
    </>
  )
}
 
