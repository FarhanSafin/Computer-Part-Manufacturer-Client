import React from 'react';
import useParts from '../../../hooks/useParts';

const Parts = () => {
    const [parts] = useParts();
    const slicedDatas = parts.slice(0,6);
    return (
      <div >
          <h2 id='parts' className='text-6xl text-center mt-32 mb-16'>Available Parts</h2>
          <div className='container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 drop-shadow-2xl'>
          {
            slicedDatas.map(data => <div class="hero mb-20 bg-slate-800 border-solid border-2 border-slate-400 rounded-lg">
<div class="hero-content flex-col lg:flex-row-reverse">
  <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
  <div>
    <h1 class="text-3xl font-bold">{data.name}</h1>
    <p class="py-6 text-xl">Description: {data.description}</p>
    <p class="py-6">Available: {data.available}</p>
    <p class="py-6">Minimum Order{data.minimum}</p>
    <p class="py-6">Price: {data.price}</p>
    <button class="btn btn-primary mt-32">Place Order</button>
  </div>
</div>
</div>)
          }
          </div>
      </div>
  );
  }

export default Parts;