import React, { Component } from 'react';

class PizzaItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.details.image_path} alt=""/>
                <h3>{this.props.details.name}</h3>
                <p>{this.props.details.description}</p>
                <p>{this.props.details.price}</p>
            </div>
        )
    }
}

export default PizzaItem;