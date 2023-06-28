import React, { useState, useEffect } from 'react';
import { FaBuilding, FaHeartbeat, FaStethoscope, FaUsers } from 'react-icons/fa';

const Counter = () => {
  const [count, setCount] = useState(300);
  const [count1, setCount1] = useState(320);
  const [count2, setCount2] = useState(420);
  const [count3, setCount3] = useState(100);
  const [isHovered,setIsHoverd]=useState(false);
  useEffect(() => {
    if(isHovered){
    const timer=setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 50);
    if (count >= 350) {
      clearTimeout(timer);
    }
  }
  }, [count,isHovered]);
  useEffect(() => {
    if(isHovered){
    const timer=setTimeout(() => {
        setCount1((prevCount) => prevCount + 1);
      }, 50);
    if (count1 >= 370) {
      clearTimeout(timer);
    }
  }
  }, [count1,isHovered]);
  useEffect(() => {
    if(isHovered){
    const timer=setTimeout(() => {
        setCount2((prevCount) => prevCount + 1);
      }, 50);
    if (count2 >= 470) {
      clearTimeout(timer);
    }
  }
  }, [count2,isHovered]);
  useEffect(() => {
    if(isHovered){
    const timer=setTimeout(() => {
        setCount3((prevCount) => prevCount + 1);
      }, 50);
    if (count3 >= 150) {
      clearTimeout(timer);
    }
  }
  }, [count3,isHovered]);
  const handleMouseEnter=()=>{
    setIsHoverd(true)
  }
  const handleMouseLeave = () => {
    setIsHoverd(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8' style={{paddingLeft:'8%',paddingRight:'8%'}}>
        <div className='w-full max-w-sm overflow-hidden rounded-lg shadow-lg  text-center py-10 px-3 bg-red-50'>
      <div className='text-5xl flex items-center justify-center my-6 hover:text-red-500 hover:translate-y-[-10px] transition duration-300 '><FaHeartbeat></FaHeartbeat></div>  
      <h1 className='text-4xl font-Poppins  font-semibold my-3 text-red-500'> {count}</h1>
      <h2 className='text-2xl font-Poppins font-semibold my-2'>Success Smile</h2>
      </div>
      <div className='w-full max-w-sm overflow-hidden rounded-lg shadow-lg  text-center py-10 px-3 bg-red-50'>
      <span className='text-5xl flex items-center justify-center my-6 hover:text-red-500 hover:translate-y-[-10px] hover:transition duration-2500 hover:transition duration-2100'><FaStethoscope></FaStethoscope></span>  
      <h1 className='text-4xl font-Poppins  font-semibold my-3 text-red-500'> {count1}</h1>
      <h2 className='text-2xl font-Poppins font-semibold my-2'>Happy Donors</h2>
      </div>
      <div className='w-full max-w-sm overflow-hidden rounded-lg shadow-lg  text-center py-10 px-3 bg-red-50'>
      <span className='text-5xl flex items-center justify-center my-6 hover:text-red-500 hover:translate-y-[-10px] hover:transition duration-2500'><FaUsers></FaUsers></span>  
      <h1 className='text-4xl font-Poppins  font-semibold my-3 text-red-500'> {count2}</h1>
      <h2 className='text-2xl font-Poppins font-semibold my-2'>Happy Recipient</h2>
      </div>
      <div className='w-full max-w-sm overflow-hidden rounded-lg shadow-lg  text-center py-10 px-3 bg-red-50'>
      <span className='text-5xl flex items-center justify-center my-6 hover:text-red-500 hover:translate-y-[-10px] hover:transition duration-2500'><FaBuilding></FaBuilding></span>  
      <h1 className='text-4xl font-Poppins  font-semibold my-3 text-red-500'> {count3}</h1>
      <h2 className='text-2xl font-Poppins font-semibold my-2'>Total Awards
</h2>
      </div>
  </div>
  );
};

export default Counter;