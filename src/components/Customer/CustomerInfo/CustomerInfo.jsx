import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
  render() {

    let customerDetails;
    if (this.props.customer) {
      customerDetails = <div className="customerInfo">
        <div className="customerDetails">
          <p>{this.props.customer.customer_name}</p>
          <p>{this.props.customer.street_address}</p>
          <p>{this.props.customer.city_state} {this.props.customer.zip}</p>
        </div>
        <div className="cutomerType">
          {this.props.customer.type}
        </div>
      </div>;
    } else {
      customerDetails = null;
    }
    return (
      customerDetails
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return {
    customer: reduxStore.customer.action
  }
}

export default connect(mapStateToProps)(CustomerInfo);