import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
// import axios from 'axios';
// Components
import HomeEventCard from '../EventCard/HomeEventCard';

// * TO-DO: update cards with the most recently posted events
const DashCarousel = () => {
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
          <div className='hero-content text-center mb-16 mt-8'>
            <div className='max-w-md lg:max-w-full'>
              <div className='carousel carousel-center max-w-full p-4 pb-8 space-x-4 rounded-box'>
               
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
                <button className='btn rounded-full border-none bg-primary text-base-100 hover:bg-primary-focus shadow-xl'>
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default DashCarousel;
  