import React from 'react';
// import './Banner.css';
const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url("https://thumbs.dreamstime.com/b/people-donate-blood-to-red-crescent-bank-order-help-injured-earthquake-area-turkey-magnitude-hit-southeastern-parts-268664185.jpg?w=1200")'}}>
          <div className="flex items-center justify-center w-full h-full bg-black/40">
            <div className="text-center ">
              <h1 className="text-4xl font-bold text-white lg:text-5xl font-Poppins">DONATE BLOOD AND GET 
              <br/>
              <span > REAL BLESSINGS.</span></h1>
              <div className='text-white text-2xl font-semibold my-2 font-Poppins'>
              <p>Blood is the most precious gift that anyone can give to another person.
                </p>
                <p>
              Donating blood not only saves the life also save donor's lives.
              </p>
              </div>
              <button className="w-full px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-gray-600 focus:outline-none font-Poppins">DONATE NOW</button>
            </div>
          </div>
          </div>
      
    );
};

export default Banner;