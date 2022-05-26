import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3bU1LdroYg5QCG4apYT2F8ZaW5hOSC2mFXBbroFKfcQNH9ICKqnEHdJa9vxIYxwretF0jU0tKPxg41czSrS2sF00DUyKJPG3');

const Payment = () => {
    const {id} = useParams();
    const url =`http://localhost:5000/order/${id}`;



    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }else{
        return (
            <div>
  <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div className="card-body">
    <h2 className="card-title">Pay for {order.partName}</h2>
    <h2 className="card-title">Quantity: {order.ordered}</h2>
    <p>We will contact you and deliver the product ASAP after the payment</p>
    <p>Please Pay: <span className='text-info font-bold'>৳{order.amount}</span></p>
  </div>
</div>


    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>


      </div>
</div>
            </div>
        );
    }








};

export default Payment;