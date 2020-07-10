import React, { createContext,  useReducer } from 'react'
import Reduser from './Reduser';

const initialStete = {
    transection: []
};
export const Context = createContext(initialStete);


function ContextProvider({ children }) {
    const [State, dispatch] = useReducer(Reduser, initialStete);

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

    return (
        <Context.Provider
            value={

                { initialStete: State.transection, Additems, deleteitems,incQuantity,decQuantity }

            }>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;

