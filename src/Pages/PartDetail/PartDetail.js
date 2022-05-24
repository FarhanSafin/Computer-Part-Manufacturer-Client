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
    const [agree, setAgree] = useState(true)
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data));
    }, []);

    const handleOrder = () => {
        toast.success('Order Successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }

    const handleChange = event => {
      const minAmount = parseInt(part.minimum);
      const newMinimum = parseInt(event.target.value);
      const available = parseInt(part.available);
      console.log(minAmount, newMinimum);
      if(newMinimum < minAmount || newMinimum > available) {
        setAgree(false)
      }else{
        setAgree(true)
      }
    }

    return (
      <div>
      <div class="hero min-h-fit bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold text-center">Name: <br></br>{part.name}</h1>
          <div className='text-2xl text-center'>
            <p>Description: {part.description}</p>
            <p>Available: {part.available}</p>
            <p>Minimum: {part.minimum}</p>
            <p>Price: {part.price}</p>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center text-2xl'>
      <h2>CheckOut Form</h2>


      <form className='text-center md:mx-96 md:px-96' onSubmit={handleSubmit(handleOrder)}>

      <div className="form-control w-full max-w-xs mx-6">
<label className="label">
<span className="label-text">Selected Item</span>
</label>
<input type="text" value={part.name} className="input input-bordered w-full max-w-xs" />


</div>


<div className="form-control w-full max-w-xs mx-6">
<label className="label">
<span className="label-text">Address</span>
</label>
<input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("address", {
  required: {
      value: true,
      message: 'Address is required'
  }
})} />
<label className="label">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}

</label>
</div>


<div className="form-control w-full max-w-xs mx-6">
<label className="label">
<span className="label-text">Mobile Number</span>
</label>
<input type="number" placeholder="Your number" className="input input-bordered w-full max-w-xs" {...register("mobile", {
  required: {
      value: true,
      message: 'Number is required'
  }
})} />

</div>

<div className="form-control w-full max-w-xs mx-6">
<label className="label">
<span className="label-text">Ordered Amount</span>
</label>
<input id='amount' type="number" onChange={handleChange} defaultValue={part.minimum} className="input input-bordered w-full max-w-xs" />


</div>


  <input className='btn w-full max-w-xs mt-5' disabled={!agree} type="submit" value="Order" />
</form>
<ToastContainer />
    </div>
    </div>
    );
};

export default PartDetail;


