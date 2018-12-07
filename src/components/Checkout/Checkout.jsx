import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerOrder from '../Customer/CustomerOrder/CustomerOrder';

class Checkout extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
  }

  render() {
    return (
        <div>
            <h2>Step 3: Checkout</h2>
            <CustomerOrder />
        </div>
      );
  }
}


export default connect()(Checkout);
