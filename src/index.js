import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store'
// import store and redux Provider
import Firebase, { FirebaseContext } from './components/Firebase';
// import Firebase and FirebaseContext
import { BrowserRouter, Route } from 'react-router-dom';
// import BrowserRouter and Route

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <Route path="/" component={() => (<App />)} />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
