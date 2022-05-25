import React from 'react';
import { Link } from 'react-router-dom';

const UpdatedProfile = () => {
    return (
        <div>
            <h2>Profile is updated</h2>
            <Link to='/dashboard/profile'>Return to profile</Link>
        </div>
    );
};

export default UpdatedProfile;