import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import OrderItem from '../OrderItem/OrderItem';

class Admin extends Component {

  state = {
    orders: []
  }

  componentDidMount() {
    this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
    this.refreshData();
  }


  refreshData() {
    axios.get('/api/orders').then((response) => {
      this.setState({
        orders: response.data
      });
    });
  }


  render() {
    let orderhHtml = this.state.orders.map((order) => {
      return <OrderItem key={order.id} order={order}/>;
    })
    return (
      <div>
        <h1>Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {orderhHtml}
          </tbody>
        </table>
      </div>
    );
  }
}


export default connect()(Admin);
