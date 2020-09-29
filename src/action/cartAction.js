import { Add_to_Cart, Change_Cart_Content, Remove_from_Cart } from './type'

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