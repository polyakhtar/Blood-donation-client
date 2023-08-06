import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddReview = () => {
    const {user}=useContext(AuthContext);
    const img=user?.photoURL;
    console.log(user)
    const navigate=useNavigate();
    const handleReview=event=>{
      event.preventDefault();
      const form=event.target;
      const name=form.name.value;
      const location=form.location.value;
      const message=form.message.value;
      console.log(name,location,message);
      const reviewData={
        name,
        location,
        message,
        img
      };
      fetch('https://blood-donation-server-psi.vercel.app/reviews',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(reviewData)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.acknowledged){
          toast.success('Review added successfully');
          navigate('/')
          
        }
      })
    }

    return (
        <div>
            <form onSubmit={handleReview} className="w-4/5 mx-auto my-8 border border-gray-300 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 font-Poppins">Give your valuable opinion</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            value={user?.displayName}
            name='name'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-Poppins"
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg font-Poppins">Location</label>
          <input
            type="text"
            name='location'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-Poppins"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-lg font-Poppins">Message</label>
          <textarea
            name='message'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-Poppins"
            rows="4"
            required
          />
        </div>
        <div className='text-center'>
        <button
          className=" px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-gray-600 focus:outline-none font-Poppins"
        >
          Submit
        </button>
        </div>
      </form>
        </div>
    );
};

export default AddReview;