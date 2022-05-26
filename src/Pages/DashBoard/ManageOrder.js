import React from 'react';
import useOrders from '../../hooks/useOrders';

const ManageOrder = () => {
    const [orders] = useOrders();
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
        <th>Payment</th>
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
        <td>{order.amount}</td>
        <td>{order.payment}</td>
      </tr>)
    }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;