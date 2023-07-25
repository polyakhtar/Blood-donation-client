import React from 'react';

const Displaycomment = ({ comments }) => {
  return (
    <div>
      <h2 className="text-lg font-Poppins font-semibold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p className="font-Poppins">No comments yet.</p>
      ) : (
        <ul className="">
          {comments.map((comment) => (
            <li key={comment._id} className="my-4 font-Poppins">
              <div className="flex items-center">
                {comment.photoU && (
                  <div className="avatar mr-3">
                  <div className="w-16 rounded-full">
                    <img src={comment.photoU} alt="" />
                  </div>
                </div>
                )}
                <div className='w-full bg-blue-50 rounded-md p-1'>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="font-Poppins">{comment.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Displaycomment;
