import { combineReducers } from 'redux'
import menueReducer from './menueReducer'
import authUserReducer from './authUserReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import adminReducer from './adminReducer'
// Import all reducers

// Combine all reducers and export them
export default combineReducers({
    menueRedux: menueReducer,
    authUserRedux: authUserReducer,
    orderRedux: orderReducer,
    cart: cartReducer,
    adminRedux: adminReducer,
})