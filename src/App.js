import React, { Component } from 'react';
import avocado from './images/costa_rica/IMG_8076_avocado.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={avocado} className="App-logo" alt="logo" />
        <h1 className="App-title">I Do Not Know How this Works</h1>
      </div>
    );
  }
}

export default App;
