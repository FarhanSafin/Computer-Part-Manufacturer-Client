import React from 'react';
import useParts from '../../hooks/useParts';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    const handleDelete = id => {
        const proceed = window.confirm ('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = parts.filter(part => part._id !== id);
                setParts(remaining);
            })
        }
    }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Manage All Parts here</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
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
        parts.map((part, index)=>      <tr>
        <th>{index+1}</th>
        <td>{part.name}</td>
        <td>{part.price}</td>
        <td>{part.available}</td>
        <td>                       <button className='btn btn-outline btn-warning' onClick={() => handleDelete(part._id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </button></td>
      </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProducts;