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
import MyOrder from './Pages/MyOrder/MyOrder';
import MyProfile from './Pages/MyProfile/MyProfile';
import MyReview from './Pages/MyReview/MyReview';
import PartDetail from './Pages/PartDetail/PartDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Users from './Pages/DashBoard/Users';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import ManageProducts from './Pages/DashBoard/ManageProducts';

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
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
