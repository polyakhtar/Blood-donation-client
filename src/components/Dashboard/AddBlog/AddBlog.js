import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddBlog = () => {
  const {user}=useContext(AuthContext);
  const userEmail = user?.email;
const userDisplayName = user?.displayName;
const userPhotoURL = user?.photoURL;
const navigate=useNavigate();
  const handleBlogSubmit=event=>{
   
    event.preventDefault();
    const form=event.target;
    const title=form.title.value;
    const description=form.description.value;
    const firstDescription=form.fdescription.value;
    const secondDescription=form.sdescription.value;
    const photo=form.photo.value;
    const date=new Date();
    
    // console.log(title,description,firstTitle,firstDescription,secondTitle,secodDescription,photo)
    const blogData={
      title,
      description,
      firstDescription,
      secondDescription,
      photo,
      date,
      userEmail,
      userDisplayName,
      userPhotoURL
    }
    fetch('http://localhost:5000/blogs',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(blogData)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      if(data.acknowledged){
        toast.success("Blog posted successfully");
        navigate('/blog')
      }
    })
  }
    return (
        <div className="w-4/5 p-8 my-10 mx-auto bg-neutral-content">
      <h2 className='text-2xl font-semibold my-6 font-Poppins text-center'>Add a Blog</h2>
      <form onSubmit={handleBlogSubmit}>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-lg font-semibold font-Poppins">
              Blog Title <span className="text-red-400">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full font-semibold font-Poppins"
            name="title"
            required
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-lg font-semibold font-Poppins">
              Description <span className="text-red-400">*</span>
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered font-semibold font-Poppins"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-lg font-semibold font-Poppins">First Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered font-semibold font-Poppins"
            placeholder="Type Here"
            name="fdescription"
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-lg font-semibold font-Poppins">Second Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered font-semibold font-Poppins"
            placeholder="Type Here"
            name="sdescription"
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-lg font-semibold font-Poppins">Photo</span>
          </label>
          <input
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered w-full font-semibold font-Poppins"
            name="photo"
          />
        </div>
        <div className='text-center'>
        <input type="submit" className="btn bg-red-500 text-white hover:bg-gray-600 w-2/5 my-2 font-Poppins" value="Submit Blog" />
        </div>
      </form>
    </div>
    );
};

export default AddBlog;