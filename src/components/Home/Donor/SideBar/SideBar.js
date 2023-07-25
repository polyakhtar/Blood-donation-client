import React from 'react';
import BloodGroup from './BloodGroup/BloodGroup';
import Location from './Location/Location';

const SideBar = ({handleChange}) => {
    
    return (
        <div className='lg:h-100 lg:flex-col flex justify-around py-4 lg:mx-10'>
            <BloodGroup handleChange={handleChange}></BloodGroup>
            <Location handleChange={handleChange}></Location>
        </div>
    );
};

export default SideBar;