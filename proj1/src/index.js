import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import pages
import Master from './pages/Master';
import Home from './pages/Home'
import Aboutus from './pages/Aboutus';

const router =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Master item={<Home/>} />} />
        <Route path='/about' element={<Master item={<Aboutus/>} />} />
    </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router);
