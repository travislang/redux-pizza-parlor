import React, { Component } from 'react';
import SelectPizzas from '../SelectPizzas/SelectPizzas';
import { connect } from 'react-redux';
class Home extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'SET_DISPLAY', payload: true})
    }
    render() {
        return (
            <SelectPizzas />
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Home);