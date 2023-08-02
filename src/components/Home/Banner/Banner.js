import React from 'react';
import { Link } from 'react-router-dom';
// import './Banner.css';
const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url("https://media.gettyimages.com/id/1307735179/photo/young-man-donating-blood-in-hospital-donation-bank.jpg?s=612x612&w=0&k=20&c=o0jw68yM6ZaNGfSYvbqcZpoX5gkHb_itiEULZGb4PJo=")'}}>
          <div className="flex items-center justify-center w-full h-full bg-black/60">
            <div className="text-center ">
              <div className='lg:p-0 p-4'>
              <h1 className="text-3xl font-bold text-white lg:text-4xl font-Poppins">DONATE BLOOD AND GET 
              <br/>
              <span > REAL BLESSINGS.</span></h1>
              <div className='text-white text-xl font-semibold my-2 font-Poppins'>
              <p>Blood is the most precious gift that anyone can give to another person.
                </p>
                <p>
              Donating blood not only saves the life also save donor's lives.
              </p>
              </div>
              </div>
              <button className="w-2/5 px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-gray-700 focus:outline-none font-Poppins"><Link to='/donor'>DONOR LIST</Link></button>
            </div>
          </div>
          </div>
      
    );
};

export default Banner;