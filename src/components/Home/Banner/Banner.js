import React from 'react';

const Banner = () => {
    return (
        
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url("https://media.istockphoto.com/id/1320162065/vector/blood-cells-red-erythrocytes.jpg?s=612x612&w=0&k=20&c=rX8kGwiOsHW-V-BOal3Cf6ADKdjx_U5snDdykya0jbs=")'}}>
          <div className="flex items-center justify-center w-full h-full bg-gray-500/40">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-white lg:text-6xl font-Poppins">DONATE BLOOD AND GET 
              <br/>
              <span > REAL BLESSINGS.</span></h1>
              <div className='text-white text-2xl font-semibold my-2 font-Poppins'>
              <p>Blood is the most precious gift that anyone can give to another person.
                </p>
                <p>
              Donating blood not only saves the life also save donor's lives.
              </p>
              </div>
              <button className="w-full px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-red-600 focus:outline-none font-Poppins">DONATE NOW</button>
            </div>
          </div>
        </div>
      
    );
};

export default Banner;