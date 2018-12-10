import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerOrder extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxStore.selectedPizzas.map( item => {
                        return <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                    } ) }
                </tbody>
            </table>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(CustomerOrder);