import { createStore, applyMiddleware, compose } from 'redux'; // import redux
import thunk from 'redux-thunk' // import thunk
import rootReducer from './reducers' // import reducers
const inizialState = {}

const middleWare = [thunk]
let allStore
if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    // has Redux devtools create store
    allStore = createStore(rootReducer, inizialState, compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
} else {
    // has no Redux create store
    allStore = createStore(rootReducer, inizialState, compose(
        applyMiddleware(...middleWare)
    ))
}
// add to store
const store = allStore

export default store // export store