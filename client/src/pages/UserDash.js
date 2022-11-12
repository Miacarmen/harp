import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

import EventCard from '../components/EventCard/EventCard';
// import DashCarousel from '../components/Carousel/DashCarousel';

const UserDash = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-5 w-screen min-h-screen'>
        <div className='col-span-1 bg-base-300 text-base-100'>
          <div className='flex flex-row lg:p-5'>
            <BiUserCircle className="lg:w-10 lg:h-10"  />
            <p className='lg:font-bold lg:my-auto lg:pl-3 lg:text-xl'>Username</p>
          </div>
          <ul className='lg:pl-20 lg:font-medium lg:text-xl'>
            <li className='pb-2'>Account Details</li>
            <li className='pb-2'>Booked Events</li>
            <li className='pb-2'>Saved Events</li>
            <li className='pb-2'>Event History</li>
            <li className='pb-2'>Settings</li>
          </ul>
        </div>
        <div className='col-span-4 bg-base-100 max-w-full mb-12'>
          <h2 className='text-xl pt-2 m-5'>Account Overview</h2>
          <h3 className='pl-9 pb-3'>Upcoming Events</h3>
          <div className='flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
          <h3 className='pl-9 my-5'>Saved Events</h3>
          <div className='flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
