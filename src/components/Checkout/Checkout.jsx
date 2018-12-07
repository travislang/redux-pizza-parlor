import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import axios from 'axios';
import { withRouter } from 'react-router-dom';
=======
import CustomerInfo from '../Customer/CustomerInfo/CustomerInfo';
>>>>>>> cb776edac766ed8df397afa7987aea76b38c2aaf
import CustomerOrder from '../Customer/CustomerOrder/CustomerOrder';

class Checkout extends Component {

    checkout = () => {
        let customer = this.props.reduxStore.customer;
        console.log('customer', customer);
        
        let pizzas = this.props.reduxStore.selectedPizzas;
        console.log('pizzas;', pizzas);
        
        let data = {
            ...customer,
            pizzas: pizzas
        }
        
        axios.post('/api/order', data)
        .then( res => {
            this.props.dispatch({ type: 'CLEAR_INFO' })
            this.props.history.push('/');
        })
        

<<<<<<< HEAD
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
    }

    render() {
        console.log(this.props.reduxStore.customer);
        
        return (
            <div>
                <h2>Step 3: Checkout</h2>
                <CustomerOrder />
                <button onClick={this.checkout}>Checkout</button>
            </div>
        );
    }
=======
  render() {
    return (
      <div>
        <h2>Step 3: Checkout</h2>
        <CustomerInfo />
        <CustomerOrder />
      </div>
    );
  }
>>>>>>> cb776edac766ed8df397afa7987aea76b38c2aaf
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(withRouter(Checkout));
