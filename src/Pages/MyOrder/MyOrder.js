import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [parts, setParts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/myOrders?email=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                setParts(data)
            })
        }
    }, [user])


    const handleDelete = id => {
        const proceed = window.confirm ('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = parts.filter(part => part._id !== id);
                setParts(remaining);
            })
        }
    }

    if(loading){
        return <Loading></Loading>
    }else{
        return (
            <div>
                <div>Total Order: {parts.length}</div>
                <div className="overflow-x-auto mt-28">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th className='text-center'></th>
        <th>Buyer's Name</th>
        <th>Item</th>
        <th>Ordered Amount</th>
        <th>Payment Detail</th>
      </tr>
    </thead>
    <tbody >
    {
        parts.map((part, index) => <tr key={part._id}>
        <th>{index + 1}</th>
        <td>{part.userName}</td>
        <td>{part.partName}</td>
        <td>{part.ordered}</td>
        <td>{part.payment}</td>
        <td className='d-flex'>
                        <button className='btn btn-outline btn-warning' onClick={() => handleDelete(part._id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </button>
                        </td>
      </tr>)
    }
      
    </tbody>
  </table>
</div>
            </div>
        )
    }

    
};

export default MyOrder;