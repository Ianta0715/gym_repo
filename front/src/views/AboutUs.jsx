import React from 'react';
import { FireIcon, BoltIcon, HeartIcon  } from '@heroicons/react/20/solid';
import gym2 from '../assets/gym2.jpg';


export const AboutUs = () => {
  return (
    <>
  
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
        
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Empowering You to Achieve Your Fitness Goals</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At our gym, we believe in providing the tools, support, and environment you need to reach your fitness aspirations. Whether you're just starting your journey or looking to push your limits, our dedicated team is here to guide you every step of the way. Join us and discover a community committed to helping you become the best version of yourself.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={gym2}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-8 text-gray-700 lg:max-w-lg">
      
            <ul role="list" className="space-y-8 text-gray-600">
  <li className="flex gap-x-3">
                  <FireIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Personalized Training.</strong> Our expert trainers create personalized workout plans tailored to your fitness goals and needs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">State-of-the-art Equipment.</strong> Our gym is equipped with the latest fitness technology to enhance your training experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HeartIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Holistic Wellness.</strong> We offer a variety of classes and services including yoga, pilates, and nutrition counseling.
                  </span>
                </li>
              </ul>

             
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join Us and Transform Your Life.</h2>
              <p className="mt-6">
               We're more than just a place to work out. We're a community dedicated to helping you achieve your
        personal best. Whether you're a beginner or an experienced athlete, our supportive environment and comprehensive
        resources will help you reach your fitness goals. Come experience the difference and be part of our fitness family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
