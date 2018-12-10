import React, { Component } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
   
    componentDidMount() {
        this.getPizzas();
    }

    render() {
        const pizzas = this.state.pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} details={pizza} />
        })

        return (
            <div>
                <div className='pizzaContainer'>{pizzas}</div>
                <div>
                    <Button size="large" variant="contained" color="default" onClick={this.handleNext}>
                        Next
                    </Button>
                </div>
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