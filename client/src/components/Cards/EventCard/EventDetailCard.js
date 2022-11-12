import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailCard = () => {
  return (
    <div className="card lg:w-9/12 bg-base-200 shadow-xl lg:mb-9 mt-3 ">
    <figure className="px-10 pt-10">
      <img src='https://images.pexels.com/photos/2562096/pexels-photo-2562096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Sunset' className="rounded-xl"  />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xl">Event Title</h2>
      <p className='pt-3'>Event Description</p>
      <div className="card-actions pt-5">
        <button className="btn btn rounded-full border-none bg-primary hover:bg-primary-focus text-base-100">RSVP NOW</button>
      </div>
    </div>
  </div>
  );
};

export default EventDetailCard;
