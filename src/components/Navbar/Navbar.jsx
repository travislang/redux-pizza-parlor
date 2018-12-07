import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {HashRouter as Router, Link} from 'react-router-dom';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    }
  }
});

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
            <Grid xs={2}>
                <Typography className="total" variant="h6" color="inherit">
                Total: {total}
                </Typography>
            </Grid>
        }
        return (
              <MuiThemeProvider theme={theme}>
            <Router>
                <AppBar className="navbar" position="static" color="primary">
                    <Toolbar>
                        <Grid xs={10}>
                          <Link to='/'>
                            <Typography variant="h6" color="secondary">
                              Prime Pizza
                            </Typography>
                          </Link>
                        </Grid>
                          {navbarHtml}
                    </Toolbar>
                </AppBar>
          </Router>
              </MuiThemeProvider>
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
