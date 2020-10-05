import { Add_to_Cart, Change_Cart_Content, Load_Cart, Remove_from_Cart, Clear_Cart } from '../action/type'

const initialState = []


export default function (state = initialState, action) {
    switch (action.type) {
        case Load_Cart:
            return [...state, ...action.payload]
        case Add_to_Cart:
            return [...state, action.payload]
        case Change_Cart_Content:
            state = action.payload
            return state
        case Remove_from_Cart:
            state.splice(action.payload, 1)
            return state
        case Clear_Cart:
            return []
        default:
            return state
    }
}