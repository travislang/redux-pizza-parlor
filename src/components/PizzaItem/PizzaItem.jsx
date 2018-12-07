import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PizzaItem.css'
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
        if (this.state.selected) {
            button = 
            <Button size="large"variant="contained" color="secondary" onClick={() => this.deleteItem(this.props.details)}>
                Remove
            </Button>
        }
        else {
            button = 
            <Button size="large" variant="contained" color="primary" onClick={() => this.addItem(this.props.details)}>
                Add
            </Button>
        }
        return (
            <Card className='card'>
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image={this.props.details.image_path}
                        title="pizza"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.details.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.details.description}
                        </Typography>
                        <Typography component="p">
                            price: {this.props.details.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {button}
                </CardActions>
            </Card>
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