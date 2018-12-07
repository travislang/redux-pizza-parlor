import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
  }

  render() {
    return (
      <h1>Admin</h1>
    );
  }
}


export default connect()(Admin);
