import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register,  handleSubmit } = useForm();


    const imageStorageKey = 'a680969b118836bab9664f55e57cd58f'



    const handleReview = async event => {
          const image = event.pic[0];
          const formData = new FormData();
          formData.append('image', image)
          const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
          fetch(url, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(result => {
            if(result.success){
              const img = result.data.url;
              const review ={
                name: user.displayName || user.name,
                pic: img,
                rating: event.rating,
                description: event.description,
              }
              fetch(`https://fathomless-shore-83149.herokuapp.com/addreview`,{
                method: 'POST',
                headers:{
                  'content-type': 'application/json',
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review)
              })
              .then(res => res.json())
              .then(data => toast.success('Review Added successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }))
            }
          })


          
}

    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Please add a review using the form below</h2>
            <form className='text-center mx-5' onSubmit={handleSubmit(handleReview)}>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label md:mx-96">
<span className="label-text md:px-8">Ratings</span>
</label>
<select className="select select-bordered w-full max-w-xs md:mx-72" {...register("rating")}>
  <option selected>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Description</span>
</label>
<input type="text" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("description")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-9">Photo</span>
</label>
<input type="file" className="pt-2 input input-bordered w-full max-w-xs md:mx-72" required {...register("pic")}/>

</div>

  <input className='btn w-half max-w-xs mt-5' type="submit" value="Place Order" />
</form>
<ToastContainer />
        </div>
    );
};

export default MyReview;