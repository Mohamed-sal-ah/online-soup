import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Firebase, { FirebaseContext } from './components/Firebase';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
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
