import React from 'react';
import { FaRegHeart, FaUser } from 'react-icons/fa';

const DonorNav = ({ query, handleInputChange }) => {
  return (
    <nav className='w-full flex border-b-2 items-center justify-between p-4'>
      <div>
        <input
          type='text'
          placeholder='Search your needed donor'
          className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className='flex gap-3 items-center'>
        <a className='text-2xl text-red-500'>
          <FaRegHeart></FaRegHeart>
        </a>
        <a className='text-2xl text-red-500'>
          <FaUser></FaUser>
        </a>
      </div>
    </nav>
  );
};

export default DonorNav;