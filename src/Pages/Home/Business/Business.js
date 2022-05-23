import React from 'react';

const Business = () => {
    return (
        <div className='mt-48 '>
        <h2 className='text-6xl text-center mb-16'>Business Info</h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow container mx-auto text-center md:ml-36">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">We delivered</div>
    <div className="stat-value text-primary">150.9K</div>
    <div className="stat-desc">Products with Love</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Annual Revenue</div>
    <div className="stat-value text-secondary">12.6M</div>
    <div className="stat-desc">Last Year</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128" />
        </div>
      </div>
    </div>
    <div className="stat-value">96%</div>
    <div className="stat-title">Product Delivery Rate</div>
    <div className="stat-desc text-secondary">On Time</div>
  </div>
  
</div>
</div>
    );
};

export default Business;