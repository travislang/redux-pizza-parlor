import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaItem extends Component {
    state = {
        selected: false
    }
    addItem = (pizza) => {
        console.log('worked');
        
        this.setState({
            selected: true
        })
        this.props.dispatch({ type: 'SELECT_PIZZA', payload: pizza })
    }
    deleteItem = (pizza) => {
        this.setState({
            selected: false
        })
        this.props.dispatch({ type: 'DELETE_PIZZA', payload: pizza })
    }

    render() {
        let button;
        if( this.state.selected ) {
            button = <button onClick={ () => this.deleteItem(this.props.details)}>Delete</button>
        }
        else {
            button = <button onClick={ () => this.addItem(this.props.details)}>Add</button>
        }
        return (
            <div className='pizzaItem'>
                <img src={this.props.details.image_path} alt=""/>
                <h3>{this.props.details.name}</h3>
                <p>{this.props.details.description}</p>
                <p>{this.props.details.price}</p>
                {button}
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

export default connect(mapReduxStateToProps)(PizzaItem);