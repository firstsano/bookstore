import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';
import { isEmpty } from 'lodash';

import { catalogPath } from '~/src/helpers/routes/CatalogRoute';
import { withCartContext } from '~/src/containers/CartContext';
import CartCard from '~/src/components/Cart/CartCard';
import history from '~/src/helpers/History';


const styles = {
    title: {
        fontWeight: 'bold'
    }
}

class CartPage extends Component {
    constructor(props) {
        super(props);
        const { cartProducts } = props;
        if (isEmpty(cartProducts)) {
            history.push(catalogPath(), { withMessage: "Ваша корзина пуста" })
        }
    }

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