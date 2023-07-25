import React from 'react';
import Input from '../../Input/Input';

const Location = ({handleChange}) => {
    return (
        <div className='lg:p-4'>
            <h1 className='lg:text-2xl text-xl font-semibold text-red-500 lg:mb-2'>Locaton</h1>
            <div className='flex flex-col'>
            <label className='font-semibold'>
                <input onChange={handleChange} type="radio" value="" name="test1" />
                <span></span>All
               </label>
               <Input 
               handleChange={handleChange}
               value='Chittagong'
               title="Chittagong"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Dhaka'
               title="Dhaka"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Rajshahi'
               title="Rajshahi"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Rangpur'
               title="Rangpur"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Khulna'
               title="Khulna"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Barisal'
               title="Barisal"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Mymensingh'
               title="Mymensingh"
               name="test1"
               ></Input>
               <Input 
               handleChange={handleChange}
               value='Sylhet'
               title="Sylhet"
               name="test1"
               ></Input>
                
                </div>
        </div>
    );
};

export default Location;