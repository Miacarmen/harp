import React from 'react';
// on click of button, redirect to full page details of the clicked event

// dynamically render image, title, and short description of event from the database

const HomeEventCard = ({ title, summary, imageURL }) => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl'>
      <figure>
        <img
          src={imageURL}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-start'>Summary</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-sm rounded-full border-none bg-neutral hover:bg-neutral-focus text-base-300'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeEventCard;
