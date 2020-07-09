import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//import Component
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Home from './Components/Home'

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
