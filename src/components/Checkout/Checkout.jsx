import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CustomerInfo from '../Customer/CustomerInfo/CustomerInfo';
import CustomerOrder from '../Customer/CustomerOrder/CustomerOrder';

class Checkout extends Component {
    checkout = () => {
        const customer = this.props.reduxStore.customer;
        const pizzas = this.props.reduxStore.selectedPizzas;
        let total = 0;
        for (const pizza of pizzas) {
            total = total + parseFloat(pizza.price);
        }
        let data = {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            type: customer.type,
            total: total,
            pizzas: pizzas
        }
        console.log(data);
        
        
        axios.post('/api/order', data)
        .then( res => {
            this.props.dispatch({ type: 'CLEAR_INFO' })
            this.props.history.push('/');
        }).catch( err => {
            console.log('error in post:', err );
        })
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SET_DISPLAY', payload: false })
    }

    render() {
        const pizzas = this.props.reduxStore.selectedPizzas;
        let total = 0;
        for (const pizza of pizzas) {
            total = total + parseFloat(pizza.price);
        }
        return (
            <div>
                <h2>Step 3: Checkout</h2>
                <CustomerInfo />
                <CustomerOrder />
                <button onClick={this.checkout}>Checkout</button>
                {total}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(withRouter(Checkout));
