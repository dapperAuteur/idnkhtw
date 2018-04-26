import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const supportsHistory = 'pushState' in window.history;

const PalabrasContainer = () => (
  <Router
    forceRefresh={ !supportsHistory }>
    <App />
  </Router>
);

export default PalabrasContainer;
