import size from 'lodash-es/size';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';

const styles = {
    root: {
        display: 'inline-block',
        position: 'relative'
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { size: size(props.products) }
    }

    wrapInBadge(content) {
        const { size } = this.state;
        return (
            <Badge badgeContent={size} color="secondary">
                {content}
            </Badge>
        );
    }

    render() {
        const { classes, products } = this.props;
        const { size } = this.state;
        let cart = (size != 0) ? this.wrapInBadge(<CartIcon />) : <CartIcon />;
        return (
            <IconButton aria-label="Shopping cart" color="inherit">
                {cart}
            </IconButton>
        );
    }
}

Cart.defaultProps = {
    products: []
};

export default withStyles(styles)(Cart);