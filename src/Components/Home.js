import React from 'react';
import AlertFakedata from './AlertFakedata';



function Home() {
    return (
        <div>
            <h3 className="heading">WelCome to Blue Shoe</h3>
            <div className="imagediv">
                <img src='https://source.unsplash.com/1600x900/?shoes' alt="Shoes Images" class="rounded mx-auto d-block img-fluid Shoesimages"></img>
            </div>
            <AlertFakedata/>
        </div>
    )
}
export default Home;