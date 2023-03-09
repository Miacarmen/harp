import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventDetailCard = ({}) => {

  const [eventData, setEventData] = useState({});
  // const { _id} = useParams();

  useEffect(() => {
    const baseURL = `http://localhost:4000/api/events/${eventData._id}`;
    axios.get(baseURL).then((res) => {
      setEventData(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <div className="card lg:w-9/12 bg-base-200 shadow-xl lg:mb-9 mt-3 ">
    <figure className="px-10 pt-10">
      <img src={eventData.imageURL}
        alt={eventData.title} className="rounded-xl"  />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xl">{eventData.title}</h2>
      <p className='pt-3'>{eventData.description}</p>
      <p className='pt-3'>Duration: {eventData.duration}</p>
      <p className='pt-3'>Days: {eventData.days}</p>
      <p className='pt-3'>Hours: {eventData.hours}</p>
      <p className='pt-3'>$ {eventData.price}</p>
      <p className='pt-3'>Tickets Left:{eventData.openings}</p>


      <div className="card-actions pt-5">
        <button className="btn btn rounded-full border-none bg-primary hover:bg-primary-focus text-base-100">RSVP NOW</button>
      </div>
    </div>
  </div>
  );
};

export default EventDetailCard;
