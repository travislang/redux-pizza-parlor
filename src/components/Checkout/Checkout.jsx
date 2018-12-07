import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
  }

  render() {
    return (
        <h2>Step 3: Checkout</h2>
      );
  }
}


export default connect()(Checkout);
