import { Signed_in, Signed_out } from './type'
//auth user Redux
export const LoggIn = (data) => dispatch => {
    dispatch({
        type: Signed_in,
        payload: data
    })
}

export const LoggOut = () => dispatch => {
    dispatch({
        type: Signed_out,
        payload: null
    })
}