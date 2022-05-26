import React from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteConfirmModal = ({deletingProduct, refetch, setDeletingProduct}) => {

    const {name} = deletingProduct;

    const handleDelete = id => {
        fetch(`http://localhost:5000/part/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Deleted Successfully`)
                refetch()
                setDeletingProduct(null)
            }
        })
    }
    return (
        <div>


<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>
    <p class="py-4">You can not revert the action</p>
    <div class="modal-action">
              
    <button className='btn btn-outline btn-error' onClick={() => handleDelete(deletingProduct._id)}>Delete
                        </button>
      <label for="delete-confirm-modal" class="btn">Cancel</label>
    </div>
  </div>
</div>
<ToastContainer />
</div>
    );
};

export default DeleteConfirmModal;