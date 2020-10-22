import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const inizialState = {}

const middleWare = [thunk]
let allStore
if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    allStore = createStore(rootReducer, inizialState, compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
} else {
    allStore = createStore(rootReducer, inizialState, compose(
        applyMiddleware(...middleWare)
    ))
}
const store = allStore

export default store