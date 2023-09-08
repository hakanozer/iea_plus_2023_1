import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// import Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Category from './pages/Category';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Footer from './components/Footer';


const route =
<BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/detail/:id' element={<Detail />} />
    <Route path='/category/:catName' element={<Category />} />
    <Route path='/login' element={<Login />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/search/:q' element={<Search />} />
  </Routes>
  <Footer/>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);

