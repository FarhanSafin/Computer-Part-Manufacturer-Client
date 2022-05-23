import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../../hooks/useParts';

const Parts = () => {
    const [parts] = useParts();
    const slicedDatas = parts.slice(0,6);
    return (
      <div >
          <h2 id='parts' className='text-6xl text-center mt-32 mb-16'>Available Parts</h2>
          <div className='container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 drop-shadow-2xl'>
          {
            slicedDatas.map(data => <div key={data._id} className="hero mb-20 bg-slate-800 border-solid border-2 border-slate-400 rounded-lg">
<div className="hero-content flex-col lg:flex-row-reverse">
  <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt='part'/>
  <div>
    <h1 className="text-3xl font-bold">{data.name}</h1>
    <p className="py-6 text-xl">Description: {data.description}</p>
    <p className="py-6">Available: {data.available}</p>
    <p className="py-6">Minimum Order{data.minimum}</p>
    <p className="py-6">Price: {data.price}</p>
    <button className="btn btn-outline btn-secondary mt-32">Place Order</button>
  </div>
</div>
</div>)
          }
          <Link className='text-center md:mx-96 md:px-72' to="/allparts"><button className='w-60 btn btn-outline btn-secondary text-center'>All Parts</button></Link>
          </div>
      </div>
  );
  }

export default Parts;