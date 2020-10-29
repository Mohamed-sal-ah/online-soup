import { Fetch_Users_And_Orders, Clear_Users_And_Orders } from './type'
// Admin action
export const FetchUsersAndOrders = (allInfo) => dispatch => {
    dispatch({
        type: Fetch_Users_And_Orders,
        payload: allInfo
    })
}
export const ClearUsersAndOrders = () => dispatch => {
    dispatch({
        type: Clear_Users_And_Orders,
        payload: null
    })
}
