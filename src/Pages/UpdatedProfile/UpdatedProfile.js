import React from 'react';
import { Link } from 'react-router-dom';

const UpdatedProfile = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-info mt-20'>Profile is updated</h2>
            <Link className='text-4xl text-center text-info mt-20 md:mx-96 md:px-80' to='/dashboard'>Click here to Return to profile</Link>
        </div>
    );
};

export default UpdatedProfile;