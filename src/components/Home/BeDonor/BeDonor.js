import React from 'react';
import { Link } from 'react-router-dom';

const BeDonor = () => {
    return (
      <div className="w-full bg-cover transparent lg:py-16 py-10 flex flex-col items-center justify-center" style={{backgroundImage:'url("https://media.istockphoto.com/id/1405271032/vector/world-blood-donor-day-poster-in-paper-cut-style-3d-red-background-with-liquid-waves-vector.jpg?s=612x612&w=0&k=20&c=Yq5-GIMyPSu-zsGDwB0ea8zE1hgehV4yST25-6jkDd0=")'}}>
      <div className='py-8'>
    <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-9 text-white text-center font-Poppins">
    WE HAVE BEEN HELPING PEOPLE SINCE 40 YEARS</h1>
      <p className="text-white text-center font-Poppins text-xl my-4 mt-6 font-Poppins">You can give blood at any of our blood donation venues all over the world. We have total sixty thousands donor centers and
      <br/>
      visit thousands of other venues on various occasions.</p>
      <div className='text-center'>
      <button className="w-full px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md lg:w-auto hover:bg-gray-800 focus:outline-none font-Poppins"><Link to='/donorform'>BECOME DONOR</Link></button>
            </div>
            </div>
            </div>
                    
    );
};

export default BeDonor;
