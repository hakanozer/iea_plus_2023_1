import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

// import pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';

const router =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);


