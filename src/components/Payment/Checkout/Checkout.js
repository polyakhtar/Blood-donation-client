import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Checkout = ({price}) => {
  const { user } = useContext(AuthContext);
  console.log(user)
    const stripe=useStripe();
    const elements=useElements();
    const [cardError,setCardError]=useState('');
    const [clientSecret, setClientSecret] = useState("");
    console.log(clientSecret)
    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
const handleSubmit=async(event)=>{
     event.preventDefault();
     if(!stripe || !elements){
        return
     }
     const card = elements.getElement(CardElement);

     if (card == null) {
       return;
     }
 
     // Use your card Element with other Stripe.js APIs
     const {error, paymentMethod} = await stripe.createPaymentMethod({
       type: 'card',
       card,
     });
     if(error){
      console.log(error);
      setCardError(error.message)
     }else{
        setCardError('')
     }
     const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if(confirmError){
        setCardError(error.message)
      }else{
        console.log('paymentIntent',paymentIntent)
      }
}
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
      className="btn btn-sm mt-4 btn-primary text-base-100"
      type="submit" 
      disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
        </>
    );
};

export default Checkout;