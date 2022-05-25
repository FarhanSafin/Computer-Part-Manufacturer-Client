import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register,  handleSubmit } = useForm();
    const imageStorageKey = 'a680969b118836bab9664f55e57cd58f'


    const handlePart = async event => {
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
              pic: img,
              name: event.name,
              price: event.price,
              available: event.available,
              minimum: event.minimum,
              description: event.description,
            }
            fetch(`http://localhost:5000/addpart`,{
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => toast.success('Product Added successfully', {
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
            <h2 className='text-center text-2xl font-bold'>Add a Product using the form below</h2>


            <form className='text-center mx-5' onSubmit={handleSubmit(handlePart)}>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Name</span>
</label>
<input type="text" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("name")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Price</span>
</label>
<input type="number" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("price")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Available</span>
</label>
<input type="number" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("available")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Description</span>
</label>
<input type="text" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("description")}/>

</div>

<div className="form-control w-full max-w-xs md:mx-80">
<label className="label">
<span className="label-text md:mx-96 md:px-5">Minimum Purchase Quantity</span>
</label>
<input type="number" placeholder="Please write something about us" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("minimum")}/>

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

export default AddProduct;