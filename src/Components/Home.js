import React from 'react';
import shoe2 from './../images/shoe2.jpg'
function Home() {
    return (
        <div>
            <h1 className="heading">WelCome to Red Shoe</h1>
            <div className="imagediv">
                <img src='https://source.unsplash.com/1600x900/?shoes' alt="Shoes Images" class="rounded mx-auto d-block img-fluid Shoesimages"></img>
            </div>
        </div>
    )
}
export default Home;