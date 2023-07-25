import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='mt-6'>
      <div className="carousel w-4/5 lg:px-4 px-8  bg-white py-6 rounded-lg">
        {reviews.map((review, index) => (
          <div
            key={review._id}
            id={review._id}
            className={`carousel-item  w-full text-center block p-6 ${
              activeItem === index ? 'active' : ''
            }`}
          >
            <div className='block'>
              <p className=' font-Poppins text-xl my-6'>{review.message}</p>
              <h1 className='font-bold text-2xl font-Poppins mb-2'>{review.name}</h1>
              <p className='font-semibold font-Poppins text-xl'>{review.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {reviews.map((review, index) => (
          <a
            key={review._id}
            href={`#${review._id}`}
            className={`btn btn-xs bg-red-500 text-white font-semibold hover:bg-red-600 ${activeItem === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;