import React, {useState, useEffect} from 'react';
import axios from 'axios';

// create tags for each event
// if search term matches any of the tags, display the event

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const search = async () => {
//       try {
//         if(!searchTerm.trim()) {
//           setSearchResults([])
//           return
//         }
//         const res = await axios.get(`/api/events/search/${searchTerm}`)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     search()
// }, [])

  return (
    <>
      <form
        className='flex'
        action='/search/'
        autoComplete='off'
        method='get'
        role='search'
      >
        <div className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search…'
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className='input input-bordered'
            />
            <button className='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
