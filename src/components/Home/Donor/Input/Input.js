import React from 'react';

const Input = ({handleChange,value,title,name}) => {
    return (
        <div>
            <label className='block relative pl-3 mb-1' >
                    <input onChange={handleChange} type="radio" value={value} name={name}/>
                    <span></span>{title}
                </label>
        </div>
    );
};

export default Input;