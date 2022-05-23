import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';

const AllParts = () => {
    const [parts] = useParts();
    const navigate = useNavigate();
    const showPartDetail = id => {
        const path = `/part/${id}`;
        navigate(path);
    }
    return (
        <div >
        <h2 id='parts' className='text-6xl text-center mt-32 mb-16'>Available Parts</h2>
        <div className='container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 drop-shadow-2xl'>
        {
            parts.map(data => <div key={data._id} className="hero mb-20 bg-slate-800 border-solid border-2 border-slate-400 rounded-lg">
<div className="hero-content flex-col lg:flex-row-reverse">
<img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt='part' />
<div>
  <h1 className="text-3xl font-bold">{data.name}</h1>
  <p className="py-6 text-xl">Description: {data.description}</p>
  <p className="py-6">Available: {data.available}</p>
  <p className="py-6">Minimum Order{data.minimum}</p>
  <p className="py-6">Price: {data.price}</p>
  <button className="btn btn-outline btn-secondary mt-32" onClick={() => showPartDetail(data._id)}>Place Order</button>
</div>
</div>
</div>)
        }
        </div>
    </div>
    );
};

export default AllParts;