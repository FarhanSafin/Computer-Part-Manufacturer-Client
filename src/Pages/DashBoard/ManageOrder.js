import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';


const ManageOrder = () => {
    const [orders, setOrders] = useOrders();
    const navigate = useNavigate();


    const updateOrder = id => {
      fetch(`http://localhost:5000/updatestatus/${id}`,{
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify()
    })
    .then(res => res.json());
    const path = `/dashboard/statusupdated`;
    navigate(path);
 
    }

    const handleDelete = id => {
      const url = `http://localhost:5000/customerorder/${id}`;
      fetch(url, {
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
      })
}





    return (
        <div>
            <h2>All orders: {orders.length}</h2>
                <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Ordered Person's Name</th>
        <th>Ordered Person's Email</th>
        <th>Ordered Item</th>
        <th>Ordered Quantity</th>
        <th>Total Price</th>
        <th>Status</th>
        <th>Actions</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
    {
        orders.map((order, index)=><tr>
        <th>{index + 1}</th>
        <td>{order.userName}</td>
        <td>{order.email}</td>
        <td>{order.partName}</td>
        <td>{order.ordered}</td>
        <td>{order.price}</td>
        <td>{order.paid}</td>
        <td>{order.paid !== 'Pending' ? <span className='btn' disabled onClick={() => updateOrder(order._id)}>Update</span> : <span className='btn' onClick={() => updateOrder(order._id)}>Update</span>}</td>
        <td>

        {order.paid === 'UnPaid'  ? <label onClick={() => handleDelete(order._id)} for="delete-confirm-modal" className="btn btn-outline btn-warning">Delete</label> : <label disabled  onClick={() => handleDelete(order._id)} for="delete-confirm-modal" className="btn btn-outline btn-warning">Delete</label>}
        </td>
      </tr>)
    }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;