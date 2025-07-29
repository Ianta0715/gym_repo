import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cancelUserAppointment } from '../redux/reducer';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export default function AppointmentCard({ appointment }) {
  const dispatch = useDispatch();
  const [localStatus, setLocalStatus] = useState(appointment.status);

  const handleCancelAppointment = async () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await axios.put(` https://gym-repo-42a3.onrender.com/appointments/cancel/${appointment.AppointmentId}`);
        setLocalStatus('cancelled');
        dispatch(cancelUserAppointment({ id: appointment.AppointmentId }));
      } catch (error) {
        console.error('Failed to cancel appointment', error);
      }
    }
  };

  return (
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
        {localStatus === 'active' ? (
          <button
            onClick={handleCancelAppointment}
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-5 rounded"
          >
            Cancel appointment
          </button>
        ) : (
          <p className="text-md leading-5 text-gray-500 m-9">Cancelled</p>
        )}
      </div>
    </li>
  );
}
