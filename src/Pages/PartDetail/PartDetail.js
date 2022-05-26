import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const PartDetail = () => {
    const [user, loading] = useAuthState(auth);
    const { register,  handleSubmit } = useForm();
    
    const [agree, setAgree] = useState(false);
    const {partId} = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
      if(user){
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data));
    }
      }

, [user, partId]);

const price = parseInt(part.price);
let orderedAmount = parseInt(document.getElementById("amount")?.value);
const total = price * orderedAmount;

    const handleOrder = event => {
      const minAmount = parseInt(part.minimum);
      const available = parseInt(part.available);
      const price = parseInt(part.price);
      let orderedAmount = parseInt(document.getElementById("amount").value);
      const total = price * orderedAmount;
      if(orderedAmount >= minAmount && orderedAmount <= available){
        const order ={
          partId: part._id,
          partName: part.name,
          userName: user.displayName,
          email: user.email,
          userAddress: event.address,
          userPhone: event.mobile,
          ordered: event.ordered,
          price: total,
          payment: "Not Done"
        }
        
        fetch('http://localhost:5000/addorder',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('Order Successfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        })

      }else{
        toast.warn('Please recheck the ordered amount', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }

    const handleChange = event => {
      const minAmount = parseInt(part.minimum);
      const available = parseInt(part.available);
      if(event.target.value < minAmount || event.target.value > available){
        setAgree(false);
        toast.warn('Please order within the limit of available and minimum order', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }else{
        setAgree(true)
      }
    }
    
    if(loading){
      return <Loading></Loading>
    }else{
      return (
        <div>
<div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mt-36">
  <figure><img src={part.pic} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-center text-2xl font-bold mb-5">Name: {part.name}</h2>
    <p>Description: {part.description}</p>
    <p>Minimum: {part.minimum}</p>
    <p>Available: {part.available}</p>
    <p>Price: ৳{part.price}</p>
  </div>
  <div>
    <h2 className='text-center text-2xl font-bold'>Logged In User: </h2>
    <p>Name: {user.displayName}</p>
    <p>Email: {user.email}</p>
  </div>
</div>
      <div className='container mx-auto'>
      <h2 className='text-3xl font-bold mt-5 text-center' >CheckOut Form</h2>
      <form className='text-center mx-5' onSubmit={handleSubmit(handleOrder)}>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label md:mx-96">
<span className="label-text">Address</span>
</label>
<input type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("address")}/>
</div>


<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96">Mobile Number</span>
</label>
<input type="number" placeholder="Your number" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("mobile")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96">Ordered Amount</span>
</label>
<input id='amount' type="number" placeholder={part.minimum} onKeyUp={handleChange} className="input input-bordered w-full max-w-xs md:mx-64" required {...register("ordered")}/>


</div>

<p className='mt-5 text-2xl font-bold'>Total Price: {total || 0}</p>
  <input className='btn w-half max-w-xs mt-5' disabled={!agree} type="submit" value="Place Order" />
</form>
</div>
<ToastContainer />
    </div>
    )
    }


    ;
};

export default PartDetail;