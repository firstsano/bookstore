import sum from 'lodash-es/sum';
import React, { Component } from 'react';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "inherit" };
    }

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

    onDragOver(event) {
        event.preventDefault();
        this.setState({color: "secondary"});
    }

    onDrop(event) {
        event.preventDefault();
        this.setState({color: "inherit"});
        const product = event.dataTransfer.getData('data');
        this.addToCart(product);
    }

    addToCart(product) {
        const { addToCart } = this.props;
        addToCart(product)
    }

    onDragLeave(event) {
        event.preventDefault();
        this.setState({color: "inherit"});
    }

    render() {
        return (
            <IconButton
                aria-label="Shopping cart"
                color={this.state.color}
                onDragLeave={(e) => this.onDragLeave(e)}
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e)}
            >
                {this.cart}
            </IconButton>
        );
    }
}

Cart.defaultProps = {
    products: new Map()
};

export default Cart;