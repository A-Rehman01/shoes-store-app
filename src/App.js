import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//import Component
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Home from './Components/Home'
import ProductHome from './Components/ProductHome'
import Productdetail from './Components/Productdetail';
import Chart from './Components/Chart';
import ContextProvider from './GlobalContext/Context';
import Error from './Components/Error';
import Complete from './Components/Complete';

function App() {
  return (
    <div >
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path='/' element={<ProductHome />}></Route>
            <Route path='/:productid' element={<Productdetail />}></Route>
          </Route>
          <Route path='/chart' element={<Chart />}></Route>
          <Route path='/chart/complete' element={<Complete/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        
        
      </ContextProvider>
    </div>
  );
}

export default App;
