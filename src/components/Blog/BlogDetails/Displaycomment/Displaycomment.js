import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Displaycomment = () => {
    const {id,blogId}=useParams();
    console.log(id)
    const [getComments,setGetComments]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/comments/${id}`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setGetComments(data)
          
        })
      },[id])
    return (
        <div>
            <h1 className='text-xl font-bold font-Poppins text-gray-600 mb-8 border-b-2 p-4'>All Comments</h1>
          {
            getComments.map((comment,index)=>
                 <div key={index} className='flex items-center my-4'>
                    <div className="avatar mr-4">
                       <div className="w-16 rounded-full">
                         <img src={comment.photU} alt=""/>
                       </div>
                    </div>
                    <div className='w-ful bg-blue-50 py-2 px-6 rounded-lg'>
                    <h2 className='font-Poppins font-bold'>{comment.name}</h2>
                    <p className='font-Popppins font-semibold'>{comment.comment}</p>
                    </div>
                </div>
                )
          }  
        </div>
    );
};

export default Displaycomment;