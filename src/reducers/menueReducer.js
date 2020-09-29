import { fetch_menue } from '../action/type'

const initialState = {
    menue: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case fetch_menue:
            console.log('firebase fetched')
            return {
                ...state,
                menue: action.payload
            };
        default:
            return state;
    }

}