import React, { Component } from 'react';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import _ from 'lodash';

import { withCartContext } from '~/src/containers/CartContext';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "inherit" };
    }

    get cartSize() {
        const products = this.props.cart.values();
        const values = Array.from(products);
        return _.sum(values);
    }

    onDragOver(event) {
        event.preventDefault();
        this.setState({color: "secondary"});
    }

    onDrop(event) {
        event.preventDefault();
        this.setState({color: "inherit"});
        let product = event.dataTransfer.getData('text/plain');
        product = JSON.parse(product);
        this.props.addToCart(product);
    }

    addToCart(product) {
        this.props.addToCart(product);
    }

    onDragLeave(event) {
        event.preventDefault();
        this.setState({color: "inherit"});
    }

    render() {
        let cartIcon = <CartIcon />;
        if (this.cartSize > 0) {
            cartIcon = <Badge badgeContent={this.cartSize} color="secondary">
                <CartIcon />
            </Badge>
            ;
        }

        return (
            <IconButton
                aria-label="Shopping cart"
                color={this.state.color}
                onDragLeave={(e) => this.onDragLeave(e)}
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e)}
            >
                {cartIcon}
            </IconButton>
        );
    }
}

export default withCartContext(Cart);