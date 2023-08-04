import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login'

const router =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);


