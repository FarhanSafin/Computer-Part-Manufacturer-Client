import React from 'react';

const DeleteModal = ({deletingOrder, orders, setOrders, setDeletingOrder}) => {

const {partName} = deletingOrder;

const handleDelete = id => {
            const url = `https://pc-part-v1.herokuapp.com/order/${id}`;
            fetch(url, {
              method: 'DELETE',
              headers:{
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
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
<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-600">Delete your order of {partName}?</h3>
    <p className="py-4  font-bold">This action can not be reverted</p>
    <div className="modal-action">
    <button className='btn btn-outline btn-error' onClick={() => handleDelete(deletingOrder._id)}>Delete
                        </button>
      <label for="delete-confirm-modal" className="btn">Cancel</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeleteModal;