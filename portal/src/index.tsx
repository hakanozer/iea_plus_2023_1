import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// import Pages
import Home from './pages/Home';
import Detail from './pages/Detail';


const route =
<BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/detail/:id' element={<Detail />} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);

