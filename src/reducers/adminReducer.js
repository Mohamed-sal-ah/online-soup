import { Fetch_Users_And_Orders, Clear_Users_And_Orders } from '../action/type'
//  Users and orders reducer
const initialState = {
    users: '',
    orders: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Fetch_Users_And_Orders:
            // Fetch Users and orders
            return {
                ...state,
                orders: action.payload.orders,
                users: action.payload.users
            }
        case Clear_Users_And_Orders:
            // Clear Users and orders
            return {
                ...state,
                orders: action.payload,
                users: action.payload
            }
        default:
            return state
    }
}