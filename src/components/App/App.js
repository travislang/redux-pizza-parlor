import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <p>Pizza is great.</p>
        <Home />
      </div>
    );
  }
}

export default App;
