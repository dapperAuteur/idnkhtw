import React from 'react';
import { createLogger } from 'redux-logger';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './../reducers';
import App from './App';

const supportsHistory = 'pushState' in window.history;

const store = createStore(
  rootReducer
);
console.log(store.getState());

const Palabras = () => (
  <Provider store={ store }>
    <Router
      forceRefresh={ !supportsHistory }>
      <App />
    </Router>
  </Provider>
);

export default Palabras;
