import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
<div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <h2 className='text-3xl font-bold text-purple-500 mb-10'>Hello, {user.displayName}</h2>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li><Link to="/dashboard">My Profile</Link></li>
    {
      admin ? '' :       <div><li><Link to="/dashboard/order">My Orders</Link></li>
      <li><Link to="/dashboard/review">Add A Review</Link></li></div>
    }
      
      { admin && <li><Link to="/dashboard/users">Manage Admin</Link></li>}
      { admin && <li><Link to="/dashboard/addproduct">Add a Product</Link></li>}
      { admin && <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>}
      { admin && <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>}
    </ul>
  </div>
</div>
    );
};

export default Dashboard;