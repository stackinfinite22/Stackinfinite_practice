import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Explore from './components/Explore';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter  >
       <ToastContainer/>
        <Navbar/>
        <Explore/>
        <Routes>
         <Route  path ="/cart"  element={<Cart/>}/>
         <Route  path ="/error-page"  element={<ErrorPage/>}/>
         <Route  path ="/"  element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
