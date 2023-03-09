import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({ 
  _id, title, summary, imageURL }) => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl'>
    <figure>
      <img
        src={imageURL}
        alt={title}
      />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>{title}</h2>
      <p className='text-start'>{summary}</p>
      <div className='card-actions justify-end'>
        <Link to={`/events/${_id}`} key={_id}><button className='btn btn-sm rounded-full border-none bg-neutral hover:bg-neutral-focus text-base-300' onClick={() => console.log("clicked")}>
          Learn More
        </button></Link>
      </div>
    </div>
  </div>
  )
}

export default EventCard