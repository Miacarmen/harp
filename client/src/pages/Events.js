import React from 'react';

import EventCard from '../components/EventCard/EventCard';

const Events = () => {
  return (
    <div className='wrapper'>
      <div>Events</div>
      <div className='flex justify-center pt-8'>
        <div className='eventGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
