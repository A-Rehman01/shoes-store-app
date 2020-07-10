import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from './../shoe.json';
import Paper from '@material-ui/core/Paper';

import Nikeimg from './../images/nike.png'


function Productdetail() {

    const { productid } = useParams();
    return (
        <div className="Productdetail">
            <Paper elevation={3} >
               
                    <img src={Shoe[productid].img} className=' selecedimg' alt='Shoeimg'></img>
               
            </Paper>
            <Paper elevation={3} className="selectedimgtxt">

                    <p >
                        <img src={Nikeimg} width={45} height={45} alt="nikelogo"></img>
                        {Shoe[productid].name}
                        <p> <span style={{fontSize:'20px'}}> Detail: </span><br/>{Shoe[productid].discription}
                        <br/> <span style={{fontSize:'23px',color:'red'}}> Rs: {Shoe[productid].Price} </span>
                        </p>
                    </p>
                
            </Paper>

        </div>
    );
}

export default Productdetail;



