import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
  }

  render() {
    return (
        <h1>Checkout</h1>
      );
  }
}


export default connect()(Checkout);
