import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Pages
import Home from './pages/Home';
import Detail from './pages/Detail';


const route =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/detail/:id' element={<Detail />} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);

