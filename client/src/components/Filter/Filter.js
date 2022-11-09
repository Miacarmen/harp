import React from 'react';

const Filter = () => {
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
