import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Navbar extends Component {

    render() {
        // calculate total
        let total = 0;
        let pizzas = this.props.pizzas;
        for (const pizza of pizzas) {
            total = total + parseFloat(pizza.price);
        }
        // conditional render
        let navbarHtml;
        if (this.props.displayTotal) {
            navbarHtml =
            <Grid xs={1}>
                <Typography className="total" variant="h6" color="inherit">
                Total: {total}
                </Typography>
            </Grid>
        }
        return (
            <div>
                <AppBar className="navbar" position="static" color="primary">
                    <Toolbar>
                        <Grid xs={11}>
                        <Typography variant="h6" color="inherit">
                            Prime Pizza
                        </Typography>
                        </Grid>
                          {navbarHtml}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        pizzas: store.selectedPizzas,
        displayTotal: store.displayTotal
    }
}


export default connect(mapStateToProps)(Navbar);
