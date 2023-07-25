import React from 'react';
import Input from '../../Input/Input';

const BloodGroup = ({handleChange}) => {
    // console.log(handleChange)
    return (
        <div className='lg:p-6'>
            <h1 className='lg:text-2xl text-xl text-red-500 font-semibold lg:mb-2'>Blood Group </h1>
            <div className='flex flex-col'>
            <label className='font-semibold'>
                <input onChange={handleChange} type="radio" value="" name="test" />
                <span></span>All
               </label>
               <Input
               handleChange={handleChange}
               value='A+'
               title="A+"
               name="test"
               />
              <Input 
                handleChange={handleChange}
                value='A-'
                title="A-"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='B+'
                title="B+"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='B-'
                title="B-"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='O+'
                title="O+"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='O-'
                title="O-"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='AB+'
                title="AB+"
                name="test"
              />
              <Input 
                handleChange={handleChange}
                value='AB-'
                title="AB-"
                name="test"
              />
            </div>        
        </div>
    );
};

export default BloodGroup;