import React, { Component } from 'react';

import { Hashrouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Customer from '../Customer/Customer';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/customer" component={Customer}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/admin" component={Admin}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
