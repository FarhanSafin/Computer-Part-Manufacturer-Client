import React from 'react';
const DeleteOrderModal = ({deletingOrder, setDeletingOrder, refetch}) => {
    const userName = deletingOrder.userName;
    const handleDelete = id => {
        const url = `https://pc-part-v1.herokuapp.com/customerorder/${id}`;
        fetch(url, {
          method: 'DELETE',
          headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount){
            setDeletingOrder(null)
            refetch();
          }
        })
  }
    return (
        <div>

<input type="checkbox" id="delete-allorder-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">You want to delete {userName}'s order</h3>
    <p className="py-4">The action can not be reverted!</p>
    <div className="modal-action">
    <label onClick={() => handleDelete(deletingOrder._id)} for="delete-confirm-modal" className="btn btn-outline btn-error">Delete</label>
      <label for="delete-allorder-modal" className="btn">Close</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeleteOrderModal;