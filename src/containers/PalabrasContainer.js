import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('UA-10207332-25', {
  debug: true
})
ReactGA.pageview(window.location.ppathname + window.location.search);

const supportsHistory = 'pushState' in window.history;

const PalabrasContainer = () => (
  <Router
    forceRefresh={ !supportsHistory }>
    <App />
  </Router>
);

export default PalabrasContainer;
