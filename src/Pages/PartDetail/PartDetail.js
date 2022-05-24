import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartDetail = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {partId} = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data));
    }, []);

    const handleOrder = data => {
      const minAmount = parseInt(part.minimum);
      const available = parseInt(part.available);
      let orderedAmount = parseInt(document.getElementById("amount").value);
      if(orderedAmount >= minAmount && orderedAmount <= available){
        const url = `http://localhost:5000/addorder`;
        fetch(url, { 
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
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


    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Name: {part.name}</h1>
      <p className="mb-5">Description: {part.description}.</p>
      <p className="mb-5">Available: {part.available}.</p>
      <p id='min' className="mb-5">Minimum Order: {part.minimum}.</p>
      <p className="mb-5">Price Per Unit: {part.price}.</p>
      <div className='mx-16'>
      <form className='text-center' onSubmit={handleSubmit(handleOrder)}>

      <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">User</span>
</label>
<input type="text" placeholder="Your Name" value={user.displayName} className="input input-bordered w-full max-w-xs" {...register("name")}/>
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">User's Email</span>
</label>
<input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" value={user.email} {...register("email")}/>
</div>


<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Address</span>
</label>
<input type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs" required {...register("address")}/>
</div>


<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Mobile Number</span>
</label>
<input type="number" placeholder="Your number" className="input input-bordered w-full max-w-xs" required {...register("mobile")}/>

</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Ordered Amount</span>
</label>
<input id='amount' type="number" placeholder={part.minimum} className="input input-bordered w-full max-w-xs" required {...register("ordered")}/>


</div>


  <input className='btn w-full max-w-xs mt-5' type="submit" value="Order" />
</form>
</div>
    </div>
  </div>
  
</div>
<ToastContainer />
</div>
    );
};

export default PartDetail;