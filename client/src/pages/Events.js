import React from 'react';
// Components
import EventCard from '../components/Cards/EventCard/EventCard';
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';

const Events = () => {
  return (
    <div className='wrapper py-6'>
      <div className='filterContainer flex px-4 justify-between sm:px-12'>
      <div className='sInput '>
      <SearchBar />
      </div>
      <div className='fInput'>
      <Filter />
      </div>
      </div>
      <div className='flex justify-center pt-8 pb-6'>
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
