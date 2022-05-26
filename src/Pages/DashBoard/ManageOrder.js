import React from 'react';
import { useNavigate } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';


const ManageOrder = () => {
    const [orders] = useOrders();
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
        <td>{order.paid ? <span>{order.paid}</span> : <span>UnPaid</span>}</td>
        <td>{order.paid === 'Shipped' ? <span className='btn' disabled onClick={() => updateOrder(order._id)}>Update</span> : <span className='btn' onClick={() => updateOrder(order._id)}>Update</span>}</td>
      </tr>)
    }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;