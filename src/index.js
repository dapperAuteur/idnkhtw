import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import dotenv from 'dotenv';
import './index.css';
import Palabras from './containers/Palabras';
import registerServiceWorker from './registerServiceWorker';

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

firebase.initializeApp({
  APIKEY: process.env.apiKey,
  AUTHDOMAIN: process.env.authDomain,
  PROJECTID: process.env.projectId
  });

ReactDOM.render(
  <Palabras />,
  document.getElementById('root')
);
registerServiceWorker();
