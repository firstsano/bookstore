import sum from 'lodash-es/sum';
import React, { Component } from 'react';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';


class Cart extends Component {
    get cart() {
        if (this.cartSize == 0) {
            return <CartIcon />;
        }
        return (
            <Badge badgeContent={this.cartSize} color="secondary">
                <CartIcon />
            </Badge>
        );
    }

    get cartSize() {
        const { products } = this.props;
        const values = Array.from(products.values());
        return sum(values);
    }

    render() {
        const { classes, products } = this.props;
        return (
            <IconButton aria-label="Shopping cart" color="inherit">
                {this.cart}
            </IconButton>
        );
    }
}

Cart.defaultProps = {
    products: new Map()
};

export default Cart;