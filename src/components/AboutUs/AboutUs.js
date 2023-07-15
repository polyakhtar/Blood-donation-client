import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiDonateBlood } from 'react-icons/bi';

const AboutUs = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[16rem] flex justify-center items-center bg-black/60" style={{backgroundImage: 'url("https://media.istockphoto.com/id/1164870804/photo/a-person-holding-red-heart-in-hands-donate-and-family-insurance-concept-on-aquamarine.webp?b=1&s=612x612&w=0&k=20&c=wZLf2eE0tCgGhyuyBiz63F28CnGidEL8WELfMAnpSko=")'}}>
            <div className='flex items-center justify-center w-full h-full bg-black/60'>    
          <h1 className='text-4xl font-bold text-white font-Poppins uppercase '>About Us</h1>
          </div>
          </div>
        <div className=''>
        <section className="bg-white dark:bg-gray-900">
        <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
          <div className="container px-6 py-16 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">OUR VOLUNTEERS</h1>
            <div className="flex justify-center items-center mx-auto mt-6">
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
              <span className=' mx-1 text-2xl text-red-500'> <BiDonateBlood></BiDonateBlood></span>
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
            </div>
            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600 text-xl font-Poppins">
            The volunteers who give their time and talents help to fulfill our mission.
            </p>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96" style={{paddingLeft:'2%',paddingRight:'2%'}}>
          <div className="grid grid-cols-1 gap-8 mt-8 pb-10 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
              <img className="object-cover w-full rounded-xl aspect-square" src="https://img.freepik.com/premium-photo/happy-handsome-businessman-against-minimalist-backdrop-with-crossed-arms-generative-ai_830962-3135.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=ais" alt="" />
              <h1 className="mt-4 text-2xl font-bold text-gray-700 uppercase font-Poppins">Aftab Naeem</h1>
              <p className="mt-2 text-xl font-semibold text-gray-500 uppercase">Co-Founder</p>
              <div className="flex mt-4 -mx-2">
                <a href="https://www.facebook.com/poly.akhter00/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-red-600">
                 <FaFacebook></FaFacebook>
                </a>
                <a href="https://twitter.com/PolyAkhtar" target='blank' className="mx-2 text-xl text-red-500  transition-colors duration-300 hover:text-red-600" >
                  <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.linkedin.com/in/poly-akhtar/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-red-600 ">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
              <img className="object-cover w-full rounded-xl aspect-square" src="https://img.freepik.com/premium-photo/young-bussiness-woman-by-wall_52137-14492.jpg?size=626&ext=jpg&ga=GA1.1.1815370125.1670900571&semt=ais" alt="" />
              <h1 className="mt-4 text-2xl font-bold text-gray-700 uppercase">Mariya Jannat</h1>
              <p className="mt-2 text-xl font-semibold text-gray-500 uppercase">Founder</p>
              <div className="flex mt-3 -mx-2">
                <a href="https://www.facebook.com/poly.akhter00/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600 " >
                 <FaFacebook></FaFacebook>
                </a>
                <a href="https://twitter.com/PolyAkhtar" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600" >
                  <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.linkedin.com/in/poly-akhtar/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600" >
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
              <img className="object-cover w-full rounded-xl aspect-square" src="https://img.freepik.com/free-photo/outdoor-businessman-having-his-arms-crossed_23-2148763885.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=ais" alt="" />
              <h1 className="mt-4 text-2xl font-bold text-gray-700 uppercase">Fahim Shahriyar</h1>
              <p className="mt-2 text-xl text-gray-500 font-semibold uppercase">Manager</p>
              <div className="flex mt-3 -mx-2">
                <a href="https://www.facebook.com/poly.akhter00/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600" >
                 <FaFacebook></FaFacebook>
                </a>
                <a href="https://twitter.com/PolyAkhtar" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600" >
                  <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.linkedin.com/in/poly-akhtar/" target='blank' className="mx-2 text-xl text-red-500 transition-colors duration-300 hover:text-blue-600" >
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        </div>
    );
};

export default AboutUs;