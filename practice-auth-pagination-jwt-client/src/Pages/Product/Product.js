import React from 'react';

const Product = ({product}) => {
    const {name,price,img,seller,ratings}=product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Seller:{seller}</p>
    <p>Price : {price}</p>
    <p>Ratings: {ratings}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;