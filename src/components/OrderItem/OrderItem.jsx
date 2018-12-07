import React, { Component } from 'react';

class OrderItem extends Component {

    render() {
        let order = this.props.order;
        return (
            <tr>
                <td>{order.name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
        );
    }
}


export default OrderItem;
