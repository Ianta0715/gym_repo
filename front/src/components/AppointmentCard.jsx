import React from 'react';


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); 
};

export default function AppointmentCard({appointment}) {

  const handleCancel = () =>{
    alert(`Desea cancelar el turno ${appointment.AppointmentId} con la fecha ${appointment.date}`)
  }
  return (
    <>
   <li key={appointment.AppointmentId} className="flex justify-between gap-x-6 py-5 m-4 bg-white shadow-md rounded-md">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <h2 className="text-sm font-semibold leading-6 text-gray-900">Appointment #{appointment.AppointmentId}</h2>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            <strong>Description:</strong> {appointment.description}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            <strong>Date:</strong> {formatDate(appointment.date)}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            <strong>Time:</strong> {appointment.time}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        {appointment.status === 'active' ? (
          <button
            onClick={handleCancel}
           className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-5 rounded"
          >
            Cancel appointment
          </button>
        ) : (
          <p className="text-md leading-5 text-gray-500 m-9">Cancelled</p>
        )}
      </div>
    </li>
    </>
  )
}
 
