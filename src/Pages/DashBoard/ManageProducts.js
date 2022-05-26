import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageProducts = () => {

    const {data: parts, isLoading, refetch} = useQuery('users', () => fetch('https://fathomless-shore-83149.herokuapp.com/partslist', {
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res=>res.json()));

    const [deletingProduct, setDeletingProduct] = useState(null);


    if(isLoading){
      <Loading></Loading>
    }else{
      return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Manage All Parts here</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Part's Name</th>
        <th>Price</th>
        <th>Available</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        parts.map((part, index)=>      <tr key={part._id}>
        <th>{index+1}</th>
        <td>{part.name}</td>
        <td>{part.price}</td>
        <td>{part.available}</td>
        <td>    
        <label onClick={() => setDeletingProduct(part)} for="delete-confirm-modal" className="btn btn-outline btn-warning">        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></label>
        </td>
      </tr>)
    }
    </tbody>
  </table>
</div>
{
  deletingProduct && <DeleteConfirmModal
  deletingProduct={deletingProduct}
  refetch={refetch}
  setDeletingProduct={setDeletingProduct}
  ></DeleteConfirmModal>
}
        </div>
    );
    }
};

export default ManageProducts;