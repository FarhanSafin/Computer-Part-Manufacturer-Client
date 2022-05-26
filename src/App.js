import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import AllParts from './Pages/AllParts/AllParts';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/DashBoard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Registration from './Pages/Login/Registration/Registration'
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyProfile from './Pages/MyProfile/MyProfile';
import PartDetail from './Pages/PartDetail/PartDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Users from './Pages/DashBoard/Users';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import MyOrder from './Pages/DashBoard/MyOrder';
import MyReview from './Pages/DashBoard/MyReview';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import UpdatedProfile from './Pages/UpdatedProfile/UpdatedProfile';
import Payment from './Pages/DashBoard/Payment';
import StatusUpdated from './Pages/DashBoard/StatusUpdated';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/allparts' element={
          <RequireAuth><AllParts></AllParts></RequireAuth>}></Route>
        <Route path='/part/:partId' element={<RequireAuth><PartDetail></PartDetail></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='order'  element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='statusupdated' element={<StatusUpdated></StatusUpdated>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/updated' element={<UpdatedProfile></UpdatedProfile>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
