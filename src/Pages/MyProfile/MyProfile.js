import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UpdatedProfile from '../UpdatedProfile/UpdatedProfile';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { register,  handleSubmit } = useForm();
    const [data, setDatas] = useState([]);
        useEffect(() =>{
            const url = `http://localhost:5000/user/profile/${user.email}`;
            fetch(url, {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {setDatas(data)});
        },[user]);


        
        const handleProfile = (event) => {
            const userData ={
                location: event.location,
                education: event.education,
                linkedin: event.linkedin,
                Phone: event.mobile
              }
                            
              fetch(`http://localhost:5000/adduserinfo/${user.email}`,{
                method: 'PUT',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(userData)
              })
              .then(res => res.json())
              .then(data => {
                  setDatas(data)
                })
                const path = `/updated`;
                navigate(path)
            }





        if(loading){
            return <Loading></Loading>
        }else{
            return (
                <div>
                    <h2>MY PROFILE</h2>
                    <h2>Name: {user?.displayName || data?.name}</h2>
                    <h2>Email Address: {data?.email}</h2>
                    <h2>Role: {data?.role || 'Customer'}</h2>
                    <h2>Mobile: {data?.Phone || 'Not Found'}</h2>
                    <h2>Location: {data?.location || 'Not Found'}</h2>
                    <h2>Education: {data?.education || 'Not Found'}</h2>
                    <h2>LinkedIn Profile: {data?.linkedin || 'Not Found'}</h2>
    
    
    
    
    
    
    
                    <div>
                    <form className='text-center mx-5' onSubmit={handleSubmit(handleProfile)}>
    
    <div className="form-control w-full max-w-xs md:mx-80">
    <label className="label md:mx-96">
    <span className="label-text">Location</span>
    </label>
    <input type="text" placeholder="Your City" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("location")}/>
    </div>
    
    
    <div className="form-control w-full max-w-xs md:mx-80">
    <label className="label">
    <span className="label-text md:mx-96">Mobile Number</span>
    </label>
    <input type="number" placeholder="Your number" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("mobile")}/>
    
    </div>
    
    
    <div className="form-control w-full max-w-xs md:mx-80">
    <label className="label">
    <span className="label-text md:mx-96">Education</span>
    </label>
    <input type="text" placeholder="Your education level" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("education")}/>
    
    </div>
    
    
    <div className="form-control w-full max-w-xs md:mx-80">
    <label className="label">
    <span className="label-text md:mx-96">LinkedIn profile</span>
    </label>
    <input type="text" placeholder="Your profile" className="input input-bordered w-full max-w-xs md:mx-64" required {...register("linkedin")}/>
    
    </div>
    
    
      <input className='btn w-half max-w-xs mt-5' type="submit" value="Place Order" />
    </form>
                    </div>
    
    
    
    
    
    
    
    
    
    
                </div>
            );
        };
        }
    

export default MyProfile;