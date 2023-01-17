import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Layout from './Components/Pages/Layout';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Navbar';
import Login from './Components/Pages/auth/Login';
import Logout from './Components/Pages/Logout';
import Cart from './Components/Pages/Cart';

function App() {
  return (
    <Router>
    <Routes>
        
        <Route index element={<Home/>} />
        <Route path='Contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='logout' element={<Logout/>}/>
        <Route path='cart' element={<Cart/>}/>
        </Routes>
  </Router>
  );
}

export default App;
