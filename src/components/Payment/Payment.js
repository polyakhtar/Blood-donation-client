import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkout from './Checkout/Checkout';
import { BiDonateBlood } from 'react-icons/bi';
const stripePromise = loadStripe('pk_test_51M66GGIo1LJSizd51CmIIbHarkWWKxV7UIVaurOoaos2Lg5eMIdxD4UXeuzTUxLeN9VAZYRDuXjLOhBnSXv3jU4w00EccBroQF');
console.log(stripePromise);
const Payment = () => {
    const price=5;
    return (
        <div className='w-full bg-center bg-cover h-[32rem] flex items-center justify-center' style={{backgroundImage: 'url("https://img.freepik.com/premium-photo/woman-child-hands-holding-red-heart-with-paper-sign-blood-donation_101840-110.jpg?size=626&ext=jpg&ga=GA1.1.1815370125.1670900571&semt=ais")'}}>
            <div className='flex items-center justify-center w-full h-full bg-black/60'>
        <div className='border border-gray-300 p-6 w-3/5 rounded-md mx-auto bg-white'>
            <h1 className='text-2xl font-semibold my-2 font-Poppins text-center'>
               <span>Pay </span>
               <span className='text-red-500'>5$ </span>  
                <span>for </span> 
              <span className='text-red-500'>Subscription</span>  
                </h1>
                <div className="flex justify-center items-center mx-auto my-2">
            <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
              <span className=' mx-1 text-2xl text-red-500'> <BiDonateBlood></BiDonateBlood></span>
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
            </div>
            <div className='my-12'>
            <Elements stripe={stripePromise}>
              <Checkout price={price}/>
           </Elements>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Payment;


