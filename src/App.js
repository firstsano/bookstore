import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Grid,
    Divider,
} from '@material-ui/core';

import products from './constants/Products';
import Header from './Header';
import { Provider } from './CartContext';

const styles = theme => ({
    container: {
        maxWidth: '1170px',
        margin: 'auto'
    },
    divider: {
        margin: '20px 0'
    }
});

class Cart {
    constructor(callback) {
        this.items = new Map();
    }

    addToCart(item, quantity = 1) {
        if (this.items.has(item)) {
            quantity = this.items.get(item) + quantity;
        }
        this.items.set(item, quantity);
    }

    get products() {
        return this.items;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        const cart = new Cart();
        const addToCart = (product, quantity) => {
            cart.addToCart(product, quantity);
            this.setState({cart});
        };
        this.state = { cart, addToCart };
    }

    render() {
        const { title, classes } = this.props;
        return (
            <CssBaseline>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Provider value={this.state}>
                            <Header title="Pragmatic Book Store" />
                            <Divider className={classes.divider} />
                            <div> {this.props.children} </div>
                        </Provider>
                    </Grid>                    
                </Grid>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
