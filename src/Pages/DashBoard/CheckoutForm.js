import React, { useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');


    const handlePayment = async (event) => {
        console.log('cl');
        event.preventDefault();
        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      setCardError(error?.message || '');


    };

    return (
        <>
<form onSubmit={handlePayment}>
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
      <button className='btn btn-outline btn-info mt-10 px-10' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>

      {
          cardError && <p className='text-red-500'>{cardError}</p>
    
      }

        </>
    );
};

export default CheckoutForm;