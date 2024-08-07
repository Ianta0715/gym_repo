import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserAppointments, cancelUserAppointment, addUserAppointment } from '../redux/reducer';
import AppointmentCard from '../components/AppointmentCard';
import axios from 'axios';

export const MyAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.isLogged);
  const id = useSelector((state) => state.user.user);
  const appointments = useSelector((state) => state.user.appointments);
  console.log(id);
  console.log(appointments.AppointmentId);
  
  
 
  

  const [formData, setFormData] = useState({
    description: '',
    date: '',
    time: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [login, navigate]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/appointments/user/${id}`)
        .then((response) => {
          dispatch(setUserAppointments(response.data));
        })
        .catch((error) => console.log(error.message));
    }
  }, [id, dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/appointments', {
        ...formData,
        userId: id,
        status: 'active',
      });
      dispatch(addUserAppointment( response.data));
      setSuccessMessage('Appointment created successfully!');
    } catch (error) {
      console.error('Failed to create appointment', error);
    }
  };


  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const isWeekend = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const validateDate = (event) => {
    const input = event.target;
    const selectedDate = input.value;
    if (isWeekend(selectedDate)) {
      input.setCustomValidity("Appointments cannot be scheduled on weekends.");
    } else {
      input.setCustomValidity("");
    }
  };

  const validateTime = (event) => {
    const input = event.target;
    const selectedTime = input.value;
    const [hours, minutes] = selectedTime.split(':').map(Number);

    if (hours < 7 || hours > 22 || (hours === 22 && minutes > 0)) {
      input.setCustomValidity("Appointments can only be scheduled between 07:00 and 22:00.");
    } else {
      input.setCustomValidity("");
    }
  };

  return (
    <>
      <form className='m-6' onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="description"
                      name="description"
                      type="text"
                      placeholder="Activity"
                      autoComplete="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                  Date:
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={getTomorrowDate()}
                    autoComplete="date"
                    value={formData.date}
                    onChange={(e) => {
                      handleInputChange(e);
                      validateDate(e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                  Time
                </label>
                <div className="mt-2">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    min="07:00"
                    max="22:00"
                    autoComplete="time"
                    value={formData.time}
                    onChange={(e) => {
                      handleInputChange(e);
                      validateTime(e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
          {successMessage}
        </div>
      )}
      <br />
      <h1>My Appointments</h1>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.AppointmentId}
            appointment={appointment}
          />
        ))
      ) : (
        <p>No appointments registered.</p>
      )}
    </>
  );
};

export default MyAppointments;
