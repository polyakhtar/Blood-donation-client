import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BlogDetails.css';
import { FaClock } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Displaycomment from './Displaycomment/Displaycomment';

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName;
  const photoU = user?.photoURL;
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [getComments, setGetComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlogDetails(data);
      });

    const uniqueKey = Date.now();
    fetch(`http://localhost:5000/comments/${id}?key=${uniqueKey}`)
      .then(res => res.json())
      .then(data => {
        const reversedComments = data.reverse();
        setGetComments(reversedComments);
      });
  }, [id]);

  if (!blogDetails) {
    return <p>Loading...</p>;
  }

  const { _id, photo, firstDescription, secondDescription, title } = blogDetails;

  const handleSubmitComment = event => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    const commentData = {
      name,
      photoU,
      comment,
      blogId: _id,
    };

    fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then(res => res.json())
      .then(data => {
        // After posting a comment, fetch the updated comments for this blog post
        const uniqueKey = Date.now();
        fetch(`http://localhost:5000/comments/${id}?key=${uniqueKey}`)
          .then(res => res.json())
          .then(data => {
            const reversedComments = data.reverse();
            setGetComments(reversedComments);
          });

        form.reset();
      });
  };

  return (
    <div>
      <div className='w-full bg-center bg-cover h-[16rem] flex justify-center items-center ' style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1445140369/photo/woman-hands-holding-red-heart.webp?b=1&s=612x612&w=0&k=20&c=KX2c_z9b0wzyOazw2XgwgAjjoJlkrrNTlXmkDMVtr5w=")' }}>
        <div className='flex items-center justify-center w-full h-full bg-black/60'>
          <h1 className='text-3xl font-bold text-white font-Poppins uppercase '>Blog Posts</h1>
        </div>
      </div>

      <div className='w-4/5 mx-auto my-20 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex justify-center md:my-6'>
          <img className='' src={photo} alt="" />
        </div>
        <div className='ml-8 w-full'>
          <p className='text-2xl font-semibold font-Poppins text-gray-800 border-b-2 p-3'>{title}</p>
          <p className='my-4 text-gray-700'>
            <p className='font-semibold font-Poppins my-2'>{firstDescription}</p>
            <p className='font-semibold font-Poppins my-2'>{secondDescription}</p>
          </p>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center'>
              <div className="avatar mr-3">
                <div className="w-16 rounded-full">
                  <img src={blogDetails.userPhotoURL} alt="photo" />
                </div>
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold font-Poppins'>{blogDetails.userDisplayName}</p>
                <p className='font-semibold font-Poppins'>{blogDetails.userEmail}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-red-500'><FaClock /></span>
              <p className='font-Poppins font-semibold'>{blogDetails.date.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-4/5 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className=''>
          <Displaycomment comments={getComments} />
        </div>
        <div>
          {user?.email ? (
            <>
              <form onSubmit={handleSubmitComment} className="bg-gray-100 rounded-lg p-4 ml-16">
                <h2 className="text-lg font-Poppins font-semibold mb-4">Leave a Comment</h2>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-gray-800 font-semibold font-Poppins">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-Poppins"
                    placeholder="Enter your email"
                    defaultValue={user?.email}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block mb-2 text-gray-800 font-semibold font-Poppins">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-Poppins"
                    placeholder="Enter your comment"
                    rows={4}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn w-2/5 px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-gray-600 focus:outline-none font-Poppins"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <p className='font-semibold font-Poppins ml-16'>
              Please <Link className='text-blue-500 underline' to='/login'>log in</Link> to leave a comment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;