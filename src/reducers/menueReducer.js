import { fetch_menue } from '../action/type'
// Fetch menue reducer
const initialState = {
    menue: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case fetch_menue:
            return {
                ...state,
                menue: action.payload
            };
        default:
            return state;
    }

}