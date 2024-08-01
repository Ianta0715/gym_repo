import React from 'react';
import gimnasioImg from '../assets/gimnasio.jpg';
import boxeoImg from '../assets/boxeo.jpg';
import crossifitImg from '../assets/crossfit.jpg';

export const ImagesContainer = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-5 lg:mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Primer elemento */}
            <div className="flex items-center justify-center bg-gray-100">
              <img src={gimnasioImg} alt="Gimnasio" className="w-full h-80 object-cover" />
            </div>
            {/* Segundo elemento */}
            <div className="flex items-center justify-center bg-gray-100">
              <img src={crossifitImg} alt="Crossfit" className="w-full h-80 object-cover" />
            </div>
            {/* Tercer elemento */}
            <div className="flex items-center justify-center bg-gray-100">
              <img src={boxeoImg} alt="Boxeo" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
