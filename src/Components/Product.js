import React from 'react';
import { Outlet } from 'react-router-dom';

function product (){
    
    return(
        <div>
            <h3 className="heading">Our Products</h3>
            {/* hook for child routs */}
            <Outlet/>
        </div>
    )
}
export default product;