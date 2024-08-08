import React from 'react';
import crossfit1 from '../assets/crossfit1.jpg';
import crossfit2 from '../assets/crossfit2.jpg';
import crossfit3 from '../assets/crossfit3.jpg';
import crossfit4 from '../assets/crossfit4.jpg';
import crossfit5 from '../assets/crossfit5.jpg';
import box1 from '../assets/box1.jpg';
import box2 from '../assets/box2.jpg';
import box3 from '../assets/box3.jpg';
import box4 from '../assets/box4.jpg';
import box5 from '../assets/box5.jpg';
import pilates1 from '../assets/pilates1.jpg';
import pilates2 from '../assets/pilates2.jpg';
import pilates3 from '../assets/pilates3.jpg';
import pilates4 from '../assets/pilates4.jpg';
import pilates5 from '../assets/pilates5.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const Activities = () => {
  const isLogged = useSelector((state)=> state.user.isLogged);
  const navigate = useNavigate();
  console.log(isLogged);
  

  const handleBookAppointment = () => {
    if (!isLogged) {
      Swal.fire({
        title: 'Hey!',
        text: 'You need to be registered to book an appointment',
        icon: 'warning',
        confirmButtonText: 'Cool'
      });
      navigate('/register-login');
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-10 text-gray-900">
          BOX
        </h2>
        <div className="mx-auto mb-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Crossfit Image 1"
            src={box1}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 2"
            src={box2}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 3"
            src={box3}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 4"
            src={box4}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 5"
            src={box5}
            className="col-span-2 col-start-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-auto lg:col-span-1"
          />
          <div className="col-span-4 flex justify-end mt-4 lg:col-span-5">
            <button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleBookAppointment}>
            <Link to='/appointments'> Book an appointment </Link>
            </button>
          </div>
        </div>

        <br/>

        <h2 className="text-center mt-4 text-xl font-semibold leading-10 text-gray-900">
          CROSSFIT
        </h2>
        <div className="mx-auto mb-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Crossfit Image 6"
            src={crossfit1}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 7"
            src={crossfit2}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 8"
            src={crossfit3}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 9"
            src={crossfit4}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 10"
            src={crossfit5}
            className="col-span-2 col-start-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-auto lg:col-span-1"
          />
            <div className="col-span-4 flex justify-end mt-4 lg:col-span-5">
            <button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleBookAppointment}>
            <Link to='/appointments'> Book an appointment </Link>
            </button>
          </div>
        </div>
        <br/>

        <h2 className="text-center mt-4 text-xl font-semibold leading-10 text-gray-900">
          PILATES
        </h2>
        <div className="mx-auto mb-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Crossfit Image 11"
            src={pilates1}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 12"
            src={pilates2}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 13"
            src={pilates3}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 14"
            src={pilates4}
            className="col-span-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Crossfit Image 15"
            src={pilates5}
            className="col-span-2 col-start-2 max-h-56 w-full object-cover border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 sm:col-start-auto lg:col-span-1"
          />
           <div className="col-span-4 flex justify-end mt-4 lg:col-span-5">
            <button className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleBookAppointment}>
             <Link to='/appointments'> Book an appointment </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
