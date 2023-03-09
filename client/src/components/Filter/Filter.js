import React, {useState} from 'react';

const Filter = () => {
  // filter by location, date, time, day of week, recently added
  // if day of week, then show dropdown with days of week
  // if time, then show dropdown with times
  // if recently added, then filter by most recently added
  // if location, then show dropdown with locations (figure out how to do share location)
  
  return (
    <div className='form-control'>
      <div className='input-group'>
        <select className='select select-bordered'>
          <option disabled selected>
            Pick category
          </option>
          <option>Location</option>
          <option>Date</option>
          <option>Time</option>
          <option>Day of Week</option>
          <option>Recently Added</option>
        </select>
        <button className='btn'>Go</button>
      </div>
    </div>
  );
};

export default Filter;
