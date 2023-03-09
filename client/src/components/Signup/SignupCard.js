import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupCard = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // spread operator
      [name]: value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='card w-96 bg-base-200 text-base-300'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-2xl'>Signup</h2>
        <span>Already have an account?  
          <Link to='/login' class="text-primary hover:text-secondary"> Login</Link>
        </span>
        <div className='grid grid-cols-2 gap-4'>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              type='text'
              placeholder=''
              className='input input-bordered w-full max-w-xs'
              value={user.firstName}
              onChange={handleChange}
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
              value={user.lastName}
              onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className='card-actions justify-end pt-7'>
          <button type="submit" className='btn btn-primary rounded-full text-base-300' onClick={register}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
