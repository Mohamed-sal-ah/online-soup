import { combineReducers } from 'redux'
import menueReducer from './menueReducer'
import authUserReducer from './authUserReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import adminReducer from './adminReducer'

export default combineReducers({
    menueRedux: menueReducer,
    authUserRedux: authUserReducer,
    orderRedux: orderReducer,
    cart: cartReducer,
    adminRedux: adminReducer,
})