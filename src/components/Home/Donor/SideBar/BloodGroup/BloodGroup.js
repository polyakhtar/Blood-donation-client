import React from 'react';
import Input from '../../Input/Input';

const BloodGroup = ({handleChange}) => {
    // console.log(handleChange)
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Blood Group</h1>
            <div className='flex flex-col'>
               <label>
                <input onChange={handleChange} type="radio" value="" name="bloodGroup" />
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