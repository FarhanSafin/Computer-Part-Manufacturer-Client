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
        <th>id</th>
        <th>Ordered Amount</th>
        <th>Total Price</th>
        <th>Payment Detail</th>
        <th>Pay</th>
        <th>Cancel Order</th>
      </tr>
    </thead>
    <tbody >
    {
        orders.map((order, index) => <tr key={order._id}>
        <th>{index + 1}</th>
        <td>{order.userName}</td>
        <td>{order.partName}</td>
        <td>{order._id}</td>
        <td>{order.ordered}</td>
        <td>{order.amount}</td>
        <td>{order.payment}</td>
        <td>

        {(order.amount && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}>
        <button className='btn btn-success'>Pay</button>
        </Link>}

        {(order.amount && order.paid) && 
        <span className='text-success'>Paid</span>
        }
        
        </td>
        <td className='d-flex'>
        <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" className="btn btn-outline btn-warning">Delete</label>
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