import React from 'react';
import { Link } from 'react-router-dom';

const StatusUpdated = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Congratulations</h2>
            <h2 className='text-xl text-center font-bold'>Product is being shipped to the consumer</h2>
            <Link className='btn btn-success md:mx-96 md:px-72 mt-10' to='/dashboard/manageorder'>Return to manage more Products</Link>
        </div>
    );
};

export default StatusUpdated;