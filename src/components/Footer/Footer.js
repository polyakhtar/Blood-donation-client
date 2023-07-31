import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (

    <footer className="" style={{ backgroundColor: "#1A1A1B" }}>
      <div className="container p-16 mx-auto text-lg ">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <p className="max-w-sm mt-2 text-white font-Poppins">Join 1,000+ other and never miss out on new tips, tutorials, and more.</p>
              <div className="flex mt-4 -mx-1.5 ">
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://twitter.com/PolyAkhtar" target='blank'>
                  <FaTwitter className='text-2xl'></FaTwitter>
                </a>
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://www.facebook.com/poly.akhter00/" target='blank'>
                  <FaFacebook className='text-2xl'></FaFacebook>
                </a>
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://www.linkedin.com/in/poly-akhtar/" target='blank'>
                  <FaLinkedin className='text-2xl'></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className=''>
                <h3 className="text-gray-700 uppercase text-white font-Poppins hover:text-red-500">About</h3>
                <Link to='/blog' className="block mt-2 text-sm  font-Poppins text-white hover:underline hover:text-red-500">Provede Blog</Link>
                <Link to='/donor' className="block mt-2 text-sm  font-Poppins text-white hover:underline hover:text-red-500">Contact Donor</Link>
                <Link to='/' className="block mt-2 text-sm  font-Poppins text-white  hover:underline hover:text-red-500">Timely Service</Link>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase text-white font-Poppins hover:text-red-500">COMPANY</h3>
                <Link to='/aboutUs' className="block mt-2 text-sm  text-white font-Poppins hover:underline hover:text-red-500">About us</Link>
                <Link to='/contact' className="block mt-2 text-sm  text-white font-Poppins hover:underline hover:text-red-500">Contact</Link>
                <Link to='/donorform' className="block mt-2 text-sm  text-white font-Poppins hover:underline hover:text-red-500">Donate Now</Link>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase text-white hover:text-red-500">Contact</h3>
                <span className="block mt-2 text-sm  text-white font-Poppins hover:underline hover:text-red-500">+8801865164256</span>
                <span className="block mt-2 text-sm  text-white font-Poppins hover:underline hover:text-red-500">poly09876pm@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none" />
        <div>
          <p className="text-center text-white font-Poppins hover:text-red-500">© Brand 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;