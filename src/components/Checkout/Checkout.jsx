import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerInfo from '../Customer/CustomerInfo/CustomerInfo';

class Checkout extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
  }

  render() {
    return (
      <div>
        <h2>Step 3: Checkout</h2>
        <CustomerInfo />
      </div>
    );
  }
}


export default connect()(Checkout);
