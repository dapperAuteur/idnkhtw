import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PalabrasContainer from './containers/PalabrasContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <PalabrasContainer />,
  document.getElementById('root')
);
registerServiceWorker();
