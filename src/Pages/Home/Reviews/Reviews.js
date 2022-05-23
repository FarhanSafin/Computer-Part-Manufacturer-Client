import React from 'react';
import useReviews from '../../../hooks/useReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-6xl text-center mt-32 mb-16'>Reviews</h2>
            <div className='container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-3 gap-12 drop-shadow-2xl'>
                {
                    reviews.map(review => <div key={review._id} className="card card-side bg-slate-800 shadow-xl">
  <figure><img src={review.pic} className="w-2/4 mb-6 mr-24" alt="Avatar"/></figure>
  <div className="card-body text-center mr-16 mt-5">
    <h2 className="card-title">{review.name}</h2>
    <p className="mt-8">Rating: {review.rating}</p>
  </div>
</div>)
                }
            </div>
        </div>
    );
};

export default Reviews;