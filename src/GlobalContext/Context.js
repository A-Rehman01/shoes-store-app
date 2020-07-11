import React, { createContext,  useReducer,useState } from 'react'
import Reduser from './Reduser';

const initialStete = {
    transection: []
};
export const Context = createContext(initialStete);


function ContextProvider({ children }) {
    const [State, dispatch] = useReducer(Reduser, initialStete);
    const [alert ,Setalert] = useState(0);
    //additems
    function Additems(newitem) {
        dispatch(
            {
                type: 'ADD',
                payload: newitem
            }
        )
    }

    // deleteitems
    function deleteitems(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    
    function incQuantity(item){
        console.log(item.Quantity)
        dispatch({
            type:'ADDQUANTITY',
            payload: item
        })
        console.log(item.Quantity)
        
    }
    function decQuantity(item){
        dispatch({
            type:'DECQUANTITY',
            payload: item
        })
    }
    function Checkout(){
        dispatch({
            type:'CHECKOUT',
            payload: ''
        })
    }
    function Alert(value){
            Setalert(value)
    }
    return (
        <Context.Provider
            value={

                { initialStete: State.transection,Alert ,Additems, deleteitems,incQuantity,decQuantity ,Checkout,alert}
                
            }>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;

