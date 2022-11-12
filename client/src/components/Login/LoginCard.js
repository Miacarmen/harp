import React from 'react';
import { Link } from 'react-router-dom';

const LoginCard = () => {
  return (
    <div className='card w-96 bg-base-200 text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Login</h2>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='card-actions justify-end pt-7'>
          <button className='btn btn-primary rounded-full text-base-300'>Login</button>
          <Link to="/signup"><button className='btn btn-neutral rounded-full text-base-300'>Signup</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
