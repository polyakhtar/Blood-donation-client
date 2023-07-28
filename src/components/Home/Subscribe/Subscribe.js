import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Subscribe = () => {
  const {user}=useContext(AuthContext);
    return (
        <div>
        <div className="container lg:pb-14 md:my-20 my-10 mx-auto" style={{paddingLeft:'8%',paddingRight:'8%'}}>
          <div className="items-center lg:flex md:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold font-Poppins text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-red-500">Newsletter</span></h1>
                <p className="mt-3 text-xl font-Poppins text-gray-600 dark:text-gray-400">Get updates about upcoming blood donation events, news, and more.</p>
                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row items-center">
                  <input id="email" type="text" className="px-5 py-1 text-gray-700 bg-white border rounded-md focus:border-red-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300 font-Poppins" value={user?.email} placeholder="Email Address" />
                  <Link to={'/payment'}>
                  <button className="btn-sm text-sm tracking-wider text-white uppercase transition-colors bg-red-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-600 font-Poppins">
                    Subscribe
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
            </div>
          </div>
        </div>
     
        </div>
    );
};

export default Subscribe;