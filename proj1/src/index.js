import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import pages
import Master from './pages/Master';
import Home from './pages/Home'
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const router =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Master item={<Home/>} />} />
        <Route path='/about' element={<Master item={<Aboutus/>} />} />
        <Route path='/profile' element={<Master item={<Profile/>} />} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router);
