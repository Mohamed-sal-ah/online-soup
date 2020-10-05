import { Load_Order, Clear_Order } from './type'

export const LoadOrder = (data) => dispatch => {
    dispatch({
        type: Load_Order,
        payload: data
    })
}
export const ClearOrder = () => dispatch => {
    dispatch({
        type: Clear_Order,
        payload: ""
    })
}