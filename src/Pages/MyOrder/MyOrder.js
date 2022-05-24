import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [parts, setParts] = useState([]);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/myItems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setParts(data))
        }
    })

    return (
            <div>
                <div>hi {parts.length}</div>
                <div>{user.email}</div>
            </div>
        )
};

export default MyOrder;