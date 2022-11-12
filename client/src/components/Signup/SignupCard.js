import React from 'react';
import { Link } from 'react-router-dom';

const SignupCard = () => {
  return (
    <div className='card w-96 bg-base-200 text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Signup</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Last Name</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-full max-w-xs'
            />
          </div>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='card-actions justify-end pt-7'>
          <Link to='/login'>
            <button className='btn btn-primary rounded-full text-base-300'>
              Login
            </button>
          </Link>
          <button className='btn btn-neutral rounded-full text-base-300'>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
