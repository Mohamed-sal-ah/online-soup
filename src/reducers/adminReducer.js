import { Fetch_Users_And_Orders, Clear_Users_And_Orders } from '../action/type'

const initialState = {
    users: '',
    orders: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Fetch_Users_And_Orders:
            return {
                ...state,
                orders: action.payload.orders,
                users: action.payload.users
            }
        case Clear_Users_And_Orders:
            return {
                ...state,
                orders: action.payload,
                users: action.payload
            }
        default:
            return state
    }
}