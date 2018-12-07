import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
  render() {

    let customerDetails;
    if (this.props.customer) {
      customerDetails = <div className="customerInfo">
        <div className="customerDetails">
          <p>{this.props.customer_name}</p>
          <p>{this.props.street_address}</p>
          <p>{this.props.city_state} {this.props.zip}</p>
        </div>
        <div className="cutomerType">
          {this.props.type}
        </div>
      </div>;
    } else {
      customerDetails = null;
    }
    return (
      <React.Fragment>
      {customerDetails}
      {JSON.stringify(this.props.customer.customer_name)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return {
    customer: reduxStore.customer
  }
}

export default connect(mapStateToProps)(CustomerInfo);