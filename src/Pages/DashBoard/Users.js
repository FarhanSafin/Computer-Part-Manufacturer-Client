import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://computer-part-seller.onrender.com/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>User Count: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user, index)=><UserRow
        key={user._id}
         user={user}
         index={index}
         refetch={refetch}
        ></UserRow>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;