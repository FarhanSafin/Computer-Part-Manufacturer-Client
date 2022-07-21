import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const ManageOrder = () => {
    const navigate = useNavigate();
    const [deletingOrder, setDeletingOrder] = useState(null);
    
    const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch('https://pc-part-v1.herokuapp.com/allorders', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    const updateOrder = id => {
      fetch(`https://pc-part-v1.herokuapp.com/updatestatus/${id}`,{
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

    if(isLoading){
      <Loading></Loading>
    }else{
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
        orders.map((order, index)=><tr key={order._id}>
        <th>{index + 1}</th>
        <td>{order.userName}</td>
        <td>{order.email}</td>
        <td>{order.partName}</td>
        <td>{order.ordered}</td>
        <td>{order.price}</td>
        <td>{order.paid}</td>
        <td>{order.paid !== 'Pending' ? <span className='btn' disabled onClick={() => updateOrder(order._id)}>Update</span> : <span className='btn' onClick={() => updateOrder(order._id)}>Update</span>}</td>
        <td>
        {


          order.paid === 'UnPaid'  ? <label onClick={() => setDeletingOrder(order)} for="delete-allorder-modal" className="btn btn-outline btn-warning"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></label> : <label disabled for="delete-allorder-modal" onClick={() => setDeletingOrder(order)} className="btn btn-outline btn-warning"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
  deletingOrder && <DeleteOrderModal
  deletingOrder={deletingOrder}
  setDeletingOrder={setDeletingOrder}
  refetch={refetch}
  ></DeleteOrderModal>
}
</div>
    );
    }

};

export default ManageOrder;