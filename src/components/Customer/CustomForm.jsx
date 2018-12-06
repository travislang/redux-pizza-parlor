import React, { Component } from 'react';
import './CustomerForm.css';
import { connect } from 'react-redux';

const customerInfoObject = {
  customer_name: '',
  street_address: '',
  city: '',
  zip: '',
  type: ''
}

class CustomerForm extends Component {
  state = customerInfoObject;
  
  clearCustomerInfoFields = () => {
    this.setState(customerInfoObject);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_CUSTOMER', action: this.state });
    this.clearCustomerInfoFields();
  }

  render() {
    return (
      <div className="customerForm">
        <h2>Step 2: Customer Information</h2>
        <form className="customerInfo" onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} type="text" placeholder="name" name="customer_name" value={this.state.customer_name} />
            <input onChange={this.handleChange} type="text" placeholder="Street Address" name="street_address" value={this.state.street_address} />
            <input onChange={this.handleChange} type="text" placeholder="City" name="city" value={this.state.city} />
            <input onChange={this.handleChange} type="number" placeholder="Zip" name="zip" value={this.state.zip} />
          </div>
          <div>
            <div>
              <input onChange={this.handleChange} type="radio" id="pickup" name="type" value="pickup" value={this.state.type} />
              <label htmlFor="pickup">Pickup</label>
            </div>
            <div>
              <input onChange={this.handleChange} type="radio" id="delivery" name="type" value="delivery" checked={true} value={this.state.type} />
              <label htmlFor="delivery">Delivery</label>
            </div>
            <button>NEXT</button>
          </div>
          {JSON.stringify(this.state)}
        </form>
      </div>
    );
  }
}

export default CustomerForm;