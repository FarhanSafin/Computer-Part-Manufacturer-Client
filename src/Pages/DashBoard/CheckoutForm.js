import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading'
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const {_id, price, email, userName} = order;


    useEffect(() => {
        fetch('https://computer-part-seller.onrender.com/createpaymentintent', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }

        })

    },[price])


    const handlePayment = async (event) => {
        event.preventDefault();
        toast.info('Please wait while your transaction is processing', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      setCardError(error?.message || '');
      setSuccess('');
      setProcessing(true)

      //confirmation
      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: email
            },
          },
        },
      );

      if(intentError){
          setCardError(intentError?.message);
          setProcessing(false)
      }else{
          setCardError('');
          setTransactionId(paymentIntent.id)
          setSuccess('Your payment is completed')



          const payment = {
              part: _id,
              transactionId: paymentIntent.id
          }



          fetch(`https://computer-part-seller.onrender.com/order/${_id}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
          }
          
          ).then(res=>res.json())
          .then(data => {
                setProcessing(false)
          })
      }


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
      <button className='btn btn-outline btn-info mt-10 px-10' type="submit" disabled={!stripe || !clientSecret || success}>
        Pay
      </button>
    </form>

      {
          cardError && <p className='text-red-500'>{cardError}</p>
    
      }

      {
          success && <div className='text-green-500'><p>
          {success}
          </p>
          <p>Your Transcation Id: <span className='text-orange-500 font-bold'>
              {transactionId}
          </span></p>
          
          </div>
    
      }
      <ToastContainer />
        </>
    );
};

export default CheckoutForm;