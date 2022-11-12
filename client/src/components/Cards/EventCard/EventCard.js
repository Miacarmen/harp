import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = () => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl'>
    <figure>
      <img
        src='https://images.pexels.com/photos/2562096/pexels-photo-2562096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Sunset'
      />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>Title</h2>
      <p className='text-start'>Summary</p>
      <div className='card-actions justify-end'>
        <Link to="/ViewEvent"><button className='btn btn-sm rounded-full border-none bg-neutral hover:bg-neutral-focus text-base-300'>
          Learn More
        </button></Link>
      </div>
    </div>
  </div>
  )
}

export default EventCard