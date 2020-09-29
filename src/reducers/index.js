import { combineReducers } from 'redux'
import menueReducer from './menueReducer'
import authUserReducer from './authUserReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    menueRedux: menueReducer,
    authUserRedux: authUserReducer,
    cart: cartReducer
})