import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkout from './Checkout/Checkout';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);
const Payment = () => {
    const price=5;
    return (
        <div>
            <h1>Payment</h1>
            <div>
            <Elements stripe={stripePromise}>
              <Checkout price={price} />
           </Elements>
            </div>
        </div>
    );
};

export default Payment;