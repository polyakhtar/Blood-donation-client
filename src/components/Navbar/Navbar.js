import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='w-full bg-red-500 py-2 lg:flex lg:items-center lg:justify-around md:flex md:items-center md:justify-around text-center'>
            <h1 className='text-xl font-semibold text-white'>Welcome to Blood Donation Center. </h1>
            <div className='lg:flex md:flex flex justify-center my-2 gap-4 text-white text-xl'>
            <a href="https://www.facebook.com/poly.akhter00/"><FaFacebook/></a> 
           <a  href="https://twitter.com/PolyAkhtar"><FaTwitter/></a> 
           <a  href="https://www.linkedin.com/in/poly-akhtar/"><FaLinkedin/></a> 
            <FaInstagram/>
            </div>
        </div>
    );
};

export default Navbar;