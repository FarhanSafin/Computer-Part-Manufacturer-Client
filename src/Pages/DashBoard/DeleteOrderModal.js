import React from 'react';
const DeleteOrderModal = ({deletingOrder, setDeletingOrder, refetch}) => {
    const userName = deletingOrder.userName;
    const handleDelete = id => {
        const url = `https://fathomless-shore-83149.herokuapp.com/customerorder/${id}`;
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

<input type="checkbox" id="delete-allorder-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-500">You want to delete {userName}'s order</h3>
    <p class="py-4">The action can not be reverted!</p>
    <div class="modal-action">
    <label onClick={() => handleDelete(deletingOrder._id)} for="delete-confirm-modal" className="btn btn-outline btn-error">Delete</label>
      <label for="delete-allorder-modal" class="btn">Close</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeleteOrderModal;