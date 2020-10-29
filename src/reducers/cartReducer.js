import { Add_to_Cart, Change_Cart_Content, Load_Cart, Remove_from_Cart, Clear_Cart } from '../action/type'
//Cart Reducer
const initialState = []


export default function (state = initialState, action) {
    switch (action.type) {
        case Load_Cart:
            // Load cart
            return [...state, ...action.payload]
        case Add_to_Cart:
            // Add item to cart
            return [...state, action.payload]
        case Change_Cart_Content:
            // Updates cart
            state = action.payload
            return state
        case Remove_from_Cart:
            // Remove item from cart
            state.splice(action.payload, 1)
            return state
        case Clear_Cart:
            // Clear cart
            return []
        default:
            return state
    }
}