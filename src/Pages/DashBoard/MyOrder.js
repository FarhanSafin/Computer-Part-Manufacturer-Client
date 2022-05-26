import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import DeleteModal from './DeleteModal';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            fetch(`https://fathomless-shore-83149.herokuapp.com/myOrders?email=${user.email}`,{
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
                setOrders(data)
            })
        }
    }, [user])

    if(loading){
        return <Loading></Loading>
    }else{
        return (
            <div>
                <div>Total Order: {orders.length}</div>
                <div className="overflow-x-auto mt-28">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th className='text-center'></th>
        <th>Buyer's Name</th>
        <th>Item</th>
    <th>Ordered Amount</th>
        <th>Total Price</th>
        <th>Pay</th>
        <th>Transaction ID</th>

        <th>Cancel Order</th>
      </tr>
    </thead>
    <tbody >
    {
        orders.map((order, index) => <tr key={order._id}>
        <th>{index + 1}</th>
        <td>{order.userName}</td>
        <td>{order.partName}</td>
        <td>{order.ordered}</td>
        <td>{order.price}</td>
        <td>

        {(!order.transactionId) && <Link to={`/dashboard/payment/${order._id}`}>
        <button className='btn btn-success'>Pay</button>
        </Link>}

        {(order.transactionId) && 
        <span className='text-success mx-3'>Paid</span>
        }
        
        </td>
        <td>

        {(!order.transactionId) && <Link to={`/dashboard/payment/${order._id}`}>
        <p>Not done</p>
        </Link>}

        {(order.transactionId) && 
        <span className='font-bold'>{order.transactionId}</span>
        }


        </td>
        <td className='d-flex'>
        {
            order.transactionId ? <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" disabled className="btn btn-outline btn-warning"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></label> : <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-warning"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></label>
        }
        </td>
      </tr>)
    }
      
    </tbody>
  </table>
</div>
{
    deletingOrder && <DeleteModal
    deletingOrder={deletingOrder}
    setDeletingOrder={setDeletingOrder}
    orders={orders}
    setOrders={setOrders}
    ></DeleteModal>
}
            </div>
        )
    }
};

export default MyOrder;