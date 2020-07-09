import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from './../shoe.json';

import Nikeimg from './../images/nike.png'

function Productdetail() {
    const { productid } = useParams();
    return (
        <div>
            {
                <img src={Shoe[productid].img} className='rounded mx-auto d-block img-fluid selecedimg' alt='Shoeimg'></img>
            }
            {
                <h3 className="selectedimgtxt">

                    <img src={Nikeimg} width={45} height={45} alt="nikelogo"></img>
                    {Shoe[productid].name} </h3>
            }
        </div>
    );
}

export default Productdetail;