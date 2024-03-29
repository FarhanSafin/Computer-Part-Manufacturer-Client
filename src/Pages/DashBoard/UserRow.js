import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({user, refetch, index}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://computer-part-seller.onrender.com/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
                refetch();
                toast.success(`${email}` + ' is successfully an admin now')
        })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
        <ToastContainer />
      </tr>
    );
};

export default UserRow;