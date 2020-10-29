import { Add_to_Cart, Change_Cart_Content, Load_Cart, Remove_from_Cart, Clear_Cart } from './type'
// Cart action
export const AddToCart = (data) => dispatch => {
    dispatch({
        type: Add_to_Cart,
        payload: data
    })
}

export const ChangeCart = (newData) => dispatch => {
    dispatch({
        type: Change_Cart_Content,
        payload: newData
    })
}

export const RemoveCart = (id) => dispatch => {
    dispatch({
        type: Remove_from_Cart,
        payload: id
    })
}

export const LoadCart = (data) => dispatch => {
    dispatch({
        type: Load_Cart,
        payload: data
    })
}
export const ClearCart = () => dispatch => {
    dispatch({
        type: Clear_Cart,
        payload: null
    })
}