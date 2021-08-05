import { ADD_TO_CART } from '../constants'

const initialState ={
    cartData: []  //save data from action
}

export default function cartItems(state=[], action)
{
    switch(action.type){
        case ADD_TO_CART:
            console.warn('reducer>>>', action)
            return[
                ...state,
                {cartData:action.data}
            ]
            break;

        default: 
            return state
    }
}