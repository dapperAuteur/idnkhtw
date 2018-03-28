import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Palabras from './containers/Palabras';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Palabras />,
  document.getElementById('root')
);
registerServiceWorker();
