import React from 'react';
import { Outlet } from 'react-router-dom';

function product (){
    
    return(
        <div>
            <h1 className="heading">Our Products</h1>
            {/* hook for child routs */}
            <Outlet/>
        </div>
    )
}
export default product;