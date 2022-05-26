import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StatusUpdated = () => {
    return (
        <div>
            <h2>Product Status Updated</h2>
            <Link className='btn btn-success' to='/dashboard/manageorder'>Return</Link>
        </div>
    );
};

export default StatusUpdated;