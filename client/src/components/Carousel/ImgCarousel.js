import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
// import axios from 'axios';
// Components
import HomeEventCard from '../Cards/EventCard/EventCard';

// * TO-DO: update cards with the most recently posted events
const ImgCarousel = () => {
  // const [eventData, setEventData] = useState([]);

  // useEffect(() => {
  //   const baseURL = 'http://localhost:4000/api/events';
  //   axios.get(baseURL).then((res) => {
  //     setEventData(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <>
      <div className='hero'>
        <div className='hero-content text-left lg:text-center mb-16 mt-8'>
          <div className='max-w-md lg:max-w-full'>
            <h1 className='text-2xl lg:text-5xl ml-16 md:ml-1 pb-2 font-bold'>
              Browse Recently Added Events
            </h1>

            <div className='carousel carousel-center p-4 pb-8 space-x-4 rounded-box'>
            
              {/* {eventData.map((event) => (
                  <div className='carousel-item'>
                    <HomeEventCard
                      key={event._id}
                      title={event.title}
                      summary={event.summary}
                      image={event.imageURL}
                    />
                  </div>
                ))} */}
              <div className='carousel-item'>
                <HomeEventCard />
              </div>
              <div className='carousel-item'>
                <HomeEventCard />
              </div>
              <div className='carousel-item'>
                <HomeEventCard />
              </div>
              <div className='carousel-item'>
                <HomeEventCard />
              </div>
              <div className='carousel-item'>
                <HomeEventCard />
              </div>
            </div>

            <Link to='/events'>
              <button className='btn rounded-full border-none bg-primary text-base-100 hover:bg-primary-focus shadow-xl ml-44 md:ml-1'>
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgCarousel;
