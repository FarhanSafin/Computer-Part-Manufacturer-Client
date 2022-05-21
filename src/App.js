import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
