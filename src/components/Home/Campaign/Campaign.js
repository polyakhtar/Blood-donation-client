import React from 'react';
import { FaClock, FaLocationArrow } from 'react-icons/fa';

const Campaign = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-12" style={{paddingLeft:'8%',paddingRight:'8%'}}>
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-5xl font-bold text-gray-600 font-Poppins">OUR CAMPAIGNS</h1>
          <p className='text-gray-600 font-Poppins text-xl my-4'>Encourage new donors to join and continue to give blood. We have total sixty thousands donor centers and visit thousands of other venues on various occasions.
         </p>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://media.istockphoto.com/id/637957146/photo/blood-type-touch-screen-concept.jpg?s=612x612&w=0&k=20&c=eqW9JzYLzv-rsqHgMgnPapyv2P7i0lS1Vs48AkdMGsw=" alt="" />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white font-Poppins">
                  Free Group Checking
                </a>
                <p className='font-Poppins text-lg'>In this date, We are coming to your area to checking blood group.</p>
                <span className="text-lg font-semibold text-gray-600 font-Poppins">On: 25 November 2023</span>
                <div className='flex items-center gap-6 my-2'>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'>< FaClock/></span>10:00-3:00</p>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'><FaLocationArrow/></span>  Cumilla</p>
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://media.istockphoto.com/id/1363247540/photo/close-up-of-male-lab-worker-or-phlebotomist-analysing-blood-samples-in-laboratory-with.jpg?s=612x612&w=0&k=20&c=MMyZ3BgwvdN4pvmBNDV8E16g18RGNr9F3YTn37bzSCs=" alt="" />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white font-Poppins">
                  Blood Group Collection
                </a>
                <p className='font-Poppins text-lg'>In this date, We collect everybody's blood group.</p>
                <span className="text-lg font-semibold text-gray-600 font-Poppins">On: 25 November 2023</span>
                <div className='flex items-center gap-6 my-2'>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'>< FaClock/></span>10:00-3:00</p>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'><FaLocationArrow/></span> Dhaka</p>
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white font-Poppins">
                  Blood Donation Camp
                </a>
                <p className='font-Poppins text-lg'>In this date, We will origanize a blood donation camp.</p>
                <span className="text-lg font-semibold text-gray-600 font-Poppins">On: 25 November 2023</span>
                <div className='flex items-center gap-6 my-2'>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'>< FaClock/></span>10:00-3:00</p>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'><FaLocationArrow/></span>  Rajshahi</p>
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://media.istockphoto.com/id/1476567924/photo/world-donor-day-concept-with-hand-holding-paper-red-drop-on-white-background.jpg?s=612x612&w=0&k=20&c=dZf9lELFYQ6rn20aX-2b_EmgjbiwOZ2ldUl9FtsmsnQ=" alt="" />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white font-Poppins">
                  Opening Donation Day
                </a>
                <p className='font-Poppins text-lg'>In this date, We will be able to observe opening donation day.</p>
                <span className="text-lg font-semibold text-gray-600 font-Poppins">On: 25 November 2023</span>
                <div className='flex items-center gap-6 my-2'>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'>< FaClock/></span>10:00-3:00</p>
                    <p className='flex items-center font-semibold gap-2'> <span className='text-red-500'><FaLocationArrow/></span>  Chittagong</p>
                </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>
    );
};

export default Campaign;