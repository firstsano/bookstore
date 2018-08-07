import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';

import { withCartContext } from '~/src/containers/CartContext';
import CartCard from '~/src/components/Cart/CartCard';


const styles = {
    title: {
        fontWeight: 'bold'
    }
}

class CartPage extends Component {
    render() {
        const { cartProducts, classes } = this.props;

        return (
            <Fragment>
                <Typography
                    variant="title"
                    className={classes.title}
                >
                    Ваша корзина:
                </Typography>
                <CartCard products={cartProducts} />
            </Fragment>
        );
    }
}

export default withCartContext(withStyles(styles)(CartPage));