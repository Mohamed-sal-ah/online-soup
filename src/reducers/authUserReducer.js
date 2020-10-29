import { Signed_in, Signed_out } from '../action/type'
// User reducer
const initialState = {
    user: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Signed_in:
            // User is signed in
            localStorage.removeItem("guest")
            return {
                ...state,
                user: action.payload
            }
        case Signed_out:
            // User is signed out
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}