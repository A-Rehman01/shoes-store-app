import React, { useContext } from 'react';
import { Context } from './../GlobalContext/Context';
import Paper from '@material-ui/core/Paper';

import Nikeimg from './../images/nike.png'
import { useNavigate } from 'react-router-dom';

function Chart() {
    let { initialStete, deleteitems, incQuantity, decQuantity,Checkout,Alert } = useContext(Context);
    let amount = initialStete.map(Obj => { return parseInt(Obj.totalPrice) });
    let totalAmount = amount.reduce((item1, item2) => (item1 + item2), 0).toFixed(2);
    let Navigate=useNavigate();

    return (
        <div>
            {
                Object.keys(initialStete).map((Objitem) => {
                    const temp = initialStete[Objitem];
                    return (

                        <Paper key={Objitem} elevation={3} className="Chart" >
                            <div className="imgdiv"><img src={temp.img} className='chartimg' alt='Shoeimg'></img></div>

                            <div className="txtdiv">
                                <img src={Nikeimg} width={35} height={40} alt="nikelogo"></img>
                                <span style={{ fontWeight: 'bold', fontFamily: 'PT Serif' }}>{temp.name}</span>
                                <p>
                                    <span style={{ fontWeight: 'bolder' }}> Single Piece </span>
                                    <span style={{ color: 'red', fontWeight: 'bolder' }}> Rs: {temp.Price}</span>
                                </p>
                                <p style={{ fontWeight: 'bolder' }}> Total Rs: {temp.totalPrice}</p>
                                <p>
                                    <button onClick={() => incQuantity(temp)} className="add">+</button>
                                    <button onClick={() => {
                                        if (temp.Quantity > 1) { decQuantity(temp) }
                                    }} className="minus">-</button>

                                   <span style={{fontWeight:'bold'}}> Quantity: {temp.Quantity}</span>
                                    
                                            
                                    
                                </p>
                                <button onClick={() => {
                                    deleteitems(temp)
                                }} className="btndel">Delete</button>
                            </div>
                                
                    
                        </Paper>
                    );
                })
            }
            <p className="Totalamount">Rs: {totalAmount}
            <br/>
            <button onClick={()=>{
                Navigate('/chart/complete')
                Checkout();
                Alert(0);
            }} className="Purchase">Purchase</button>
            </p>

        </div>
    );
}
export default Chart;