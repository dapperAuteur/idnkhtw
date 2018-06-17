import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import authReducer from './../store/reducers/authReducer';
import { getCurrentUser } from './../store/actions/index';
import App from './App';

const rootReducer = combineReducers({
  authReducer
  // userReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log('[MIDDLEWARE] Dispatching', action);
      const result = next(action);
      console.log('[MIDDLEWARE] next state', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

if (typeof(Storage) !== "undefined" && localStorage.hasOwnProperty('currentUser')) {
  let currentUser = store.dispatch(getCurrentUser());
  console.log(currentUser);
};

ReactGA.initialize('UA-10207332-25', {
  debug: true
});

ReactGA.pageview(window.location.pathname + window.location.search);

const supportsHistory = 'pushState' in window.history;

// const PalabrasContainer = () => (
//   <Router
//     forceRefresh={ !supportsHistory }
//     onUpdate={ logPageView }>
//     <App />
//   </Router>
// );
const PalabrasContainer = () => (
  <Provider store={ store }>
    <Router
      forceRefresh={ !supportsHistory }>
      <App />
    </Router>
</Provider>
);

export default PalabrasContainer;
