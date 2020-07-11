import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './../GlobalContext/Context';

function Total ({amount}){
    let {Alert,Checkout,alert} = useContext(Context);
    let Navigate=useNavigate();
    if(alert===0){
        return(<div></div>)
    }
    return(
    <div>
        
        <p className="Totalamount">Rs: {amount}
            <br/>
            <button onClick={()=>{
                Navigate('/chart/complete')
                Checkout();
                Alert(0);
            }} className="Purchase">Purchase</button>
            </p>
    </div>
    )
}
export default Total;