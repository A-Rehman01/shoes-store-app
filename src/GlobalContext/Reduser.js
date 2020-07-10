const Reduser = ((State, action) => {

    switch (action.type) {
        case 'ADD':
            if( State.transection[State.transection.findIndex(Objstate => Objstate.id === action.payload.id)]){   
                return {
                    ...State,
                    transection: [...State.transection]
                }
            }
            else{
                return {
                    ...State,
                    transection: [action.payload, ...State.transection]
                }
            }

        case 'DELETE':

            return {
                ...State,
                transection: State.transection.filter((Objstate) => { return Objstate.id !== action.payload.id })
            }

        case 'ADDQUANTITY':
            State.transection[State.transection.findIndex(Objstate => Objstate.id === action.payload.id)].Quantity+=1;

            State.transection[State.transection.findIndex(Objstate => Objstate.id === action.payload.id)].Price
            +=action.payload.Price;
            return {
                ...State,
                transection: [...State.transection],
            }

        case 'DECQUANTITY':
            State.transection[State.transection.findIndex(Objstate => Objstate.id === action.payload.id)].Quantity--
            
            return {
                ...State,
                transection: [...State.transection],
            }


        default:
            return State;
    }
})
export default Reduser;