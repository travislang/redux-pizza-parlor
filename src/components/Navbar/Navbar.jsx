import React, {Component} from 'react';
import {connect} from 'react-redux';

class Navbar extends Component {

    render(){
        // calculate total
        let total = 0;
        let pizzas = this.props.pizzas;
        for (const pizza of pizzas) {
            total = total + pizza.price;
        }
        // conditional render
        let navbarHtml;
        if (this.props.displayTotal) {
            navbarHtml = 
                <div>
                    <h3>Total: {total}</h3>
                </div>
        }
        return (
            <div>
                <h1>Prime Pizza</h1>
                {navbarHtml}
            </div>
        )
    }
}

mapStateToProps = store => {
    return{
        pizzas: store.selectedPizzas,
        displayTotal: store.displayTotal
    }
}


export default connect(mapStateToProps)(Navbar);