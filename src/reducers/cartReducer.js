import { Add_to_Cart, Change_Cart_Content, Remove_from_Cart } from '../action/type'

const initialState = []


export default function (state = initialState, action) {
    switch (action.type) {
        case Add_to_Cart:
            return [...state, action.payload]
        case Change_Cart_Content:
            return state
        case Remove_from_Cart:
            state.splice(action.payload, 1)
            return state
        default:
            return state
    }
}