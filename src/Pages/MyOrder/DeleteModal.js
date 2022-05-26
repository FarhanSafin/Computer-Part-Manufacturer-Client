import React from 'react';

const DeleteModal = ({deletingOrder, orders, setOrders, setDeletingOrder}) => {
    console.log(deletingOrder);


    const {partName} = deletingOrder;

    const handleDelete = id => {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                setDeletingOrder(null)
            })
    }





    
    return (
        <div>



<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-600">Delete your order of {partName}?</h3>
    <p class="py-4  font-bold">This action can not be reverted</p>
    <div class="modal-action">
    <button className='btn btn-outline btn-warning' onClick={() => handleDelete(deletingOrder._id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </button>
      <label for="delete-confirm-modal" class="btn">Cancel</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeleteModal;