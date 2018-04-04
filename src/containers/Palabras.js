import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './../store/reducers';
import App from './App';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const supportsHistory = 'pushState' in window.history;

const Palabras = () => (
  <Provider store={ store }>
    <Router
      forceRefresh={ !supportsHistory }>
      <App />
    </Router>
  </Provider>
);

export default Palabras;
