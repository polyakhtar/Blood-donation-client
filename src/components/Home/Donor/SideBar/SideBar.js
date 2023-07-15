import React from 'react';
import BloodGroup from './BloodGroup/BloodGroup';
import Location from './Location/Location';

const SideBar = ({handleChange}) => {
    
    return (
        <div className='h-100 flex flex-col items-center z-1 p-4'>
            <h1>SideBar</h1>
            <BloodGroup handleChange={handleChange}></BloodGroup>
            <Location handleChange={handleChange}></Location>
        </div>
    );
};

export default SideBar;