import { Load_Order, Clear_Order } from '../action/type'

const initialState = {
    order: ''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case Load_Order:
            return {
                ...state,
                order: action.payload
            }
        case Clear_Order:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}