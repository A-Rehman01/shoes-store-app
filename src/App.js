import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//import Component
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Home from './Components/Home'
import ProductHome from './Components/ProductHome'
import Productdetail from './Components/Productdetail';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path='/' element={<ProductHome />}></Route>
          <Route path='/:productid' element={<Productdetail/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
