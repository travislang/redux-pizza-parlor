import React, { Component } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './SelectPizzas.css';

class SelectPizzas extends Component {

    state = {
        pizzas: []
    }
    getPizzas = () => {
        axios.get('/api/pizza')
        .then( res => {
            this.setState({
                pizzas: res.data
            })
        })
    }
    handleNext = () => {
        this.props.history.push('/customer');
    } 
    handlePizzaClick = (pizza) => {
        this.props.dispatch({ type: 'SELECT_PIZZA', payload: pizza})
    }
    componentDidMount() {
        this.getPizzas();
    }

    render() {
        const pizzas = this.state.pizzas.map((pizza) => {
            return <PizzaItem handlePizzaClick={this.handlePizzaClick} key={pizza.id} details={pizza} />
        })

        return (
            <div>
                <div className='pizzaContainer'>{pizzas}</div>
                <button onClick={this.handleNext}>Next</button>
            </div>
            
            
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(withRouter(SelectPizzas));