import React, { Component } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { connect } from 'react-redux';
import axios from 'axios';
import { WithRouter } from 'react-router-dom';


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
    componentDidMount() {
        this.getPizzas();
    }

    render() {
        const pizzas = this.state.pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} details={pizza} />
        })

        return (
            <div>{pizzas}</div>
            <button onClick={this.handleNext}>Next</button>
            
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(SelectPizzas);