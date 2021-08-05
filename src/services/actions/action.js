import { ADD_TO_CART } from '../constants'

export const addtoCart = (data)=>{
    console.warn("Action>>>> ", data)
    return(
        {
            type: ADD_TO_CART ,
            data: data
        }
    )

}
