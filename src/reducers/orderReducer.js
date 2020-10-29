import { Load_Order, Clear_Order } from '../action/type'
//Order reducer
const initialState = {
    order: ''
}


export default function (state = initialState, action) {
    switch (action.type) {
        //Load order
        case Load_Order:
            return {
                ...state,
                order: action.payload
            }
        case Clear_Order:
            //Clear order
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}