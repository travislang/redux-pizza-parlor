import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../Customer/CustomForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <CustomerForm />
      </div>
    );
  }
}

export default App;
