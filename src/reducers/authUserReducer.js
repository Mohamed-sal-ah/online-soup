import { Signed_in, Signed_out } from '../action/type'

const initialState = {
    user: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Signed_in:
            return {
                ...state,
                user: action.payload
            }
        case Signed_out:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}