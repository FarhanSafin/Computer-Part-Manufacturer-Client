import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PartDetail = () => {
    const [user] = useAuthState(auth);

    const {partId} = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data));
    }, []);
    


    return (
        <div>
        <div className='text-center text-xl font-semibold'>
            <h2>Logged In User: {user.displayName}</h2>
            <h2>User Email: {user.email}</h2>
        </div>
        <div className="hero min-h-screen" style={{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Name: {part.name}</h1>
      <p className="mb-5">Description: {part.description}.</p>
      <p className="mb-5">Available: {part.available}.</p>
      <p className="mb-5">Minimum Order: {part.minimum}.</p>
      <p className="mb-5">Price Per Unit: {part.price}.</p>
      <div className="form-control w-full max-w-xs mx-auto">
  <label className="label">
    <span className="label-text">Address: </span>
  </label>
  <input type="text" placeholder="Type address" className="input input-bordered w-full max-w-xs" />
</div>
      <div className="form-control w-full max-w-xs mx-auto">
  <label className="label">
    <span className="label-text">Mobile: </span>
  </label>
  <input type="number" placeholder="Type number" className="input input-bordered w-full max-w-xs" />
</div>
      <div className="form-control w-full max-w-xs mx-auto">
</div>
          <p 
            className='mt-4 w-50 d-block btn btn-primary mx-auto mb-4' variant="primary" type="submit">
            Register
          </p>
    </div>
  </div>
  
</div>

</div>
    );
};

export default PartDetail;