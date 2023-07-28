import React, { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
const [blogs,setBlogs]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(res=>res.json())
    .then(data=>{
        setBlogs(data)
    })
},[])
    return (
        <div className='container mx-auto my-16' style={{paddingLeft:'8%',paddingRight:'8%'}}>
            
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
             {
                blogs.map((blog)=>
                <Link to={`/blogdetails/${blog._id}`}>
            <div className="card bg-base-100 shadow-xl">
             <figure><img src={blog.photo} alt="Shoes" /></figure>
             <div className="card-body">
             <div className='flex items-center gap-2'>
             <span className='text-red-500'>< FaClock/></span> 
             <p className='font-Poppins font-semibold'>{blog.date.slice(0, 10)}</p>
             </div>
             <h2 className="card-title font-Poppins uppercase text-gray-600">
               {blog.title}
             </h2>
             <p className='text-lg font-Poppins'>{blog.description}</p>
             </div>
           </div>
           </Link>
                )
            }
            </div>
        </div>
    );
};

export default Blog;