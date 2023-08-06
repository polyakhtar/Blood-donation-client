import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Checkout = ({ price }) => {
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://blood-donation-server-psi.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  // Clear payment completion flag on each new user visit
  useEffect(() => {
    localStorage.removeItem('paymentCompleted');
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });
    if (confirmError) {
      setCardError(confirmError.message);
    }
    if (paymentIntent.status === 'succeeded') {
      const paymentData = {
        price,
        transactionId: paymentIntent.id,
        email: user?.email,
        name: user?.displayName,
        photoURL: user?.photoURL,
      };
      fetch('https://blood-donation-server-psi.vercel.app/payment', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      })
        .then(res => res.json())
        .then(data => {
          setSuccess('Congratulations! Your Payment Completed');
          setTransactionId(paymentIntent.id);
          if (data.acknowledged) {
            toast.success('Payment Successful');
            localStorage.setItem('paymentCompleted', 'true'); // Store the payment completion flag in local storage
            event.target.reset();
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/5'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 bg-red-500 hover:bg-gray-600 text-base-100"
          type="submit"
          disabled={!stripe || !clientSecret || processing || !user}
        >
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
      <div className='my-6'>
        {success && (
          <div className='my-2'>
            <p className='text-green-600 font-semibold font-Poppins'>{success}</p>
            <p className='font-Poppins'>
              <span className='font-semibold'>Your Transaction Id: </span>
              <span className='font-bold'>{transactionId}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;