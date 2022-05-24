import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [parts, setParts] = useState([]);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/myItems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setParts(data))
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
                const remaining = parts.filter(vehicle => vehicle._id !== id);
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
                <div class="overflow-x-auto mt-28">
  <table class="table w-full">
    
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
        parts.map((part, index) => <tr>
        <th>{index + 1}</th>
        <td>{part.userName}</td>
        <td>{part.partName}</td>
        <td>{part.ordered}</td>
        <td>{part.payment}</td>
        <td className='d-flex border border-secondary'>
                        <button className='btn btn-danger' onClick={() => handleDelete(part._id)}>            <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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