import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import { sum } from 'lodash';

import { cartPath } from '~/src/helpers/routes/CartRoute';
import { addToCart } from '~/src/actions/cart';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "inherit" };
    }

    get cartSize() {
        const products = this.props.products;
        return sum(products.map(p => p.quantity));
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
        this.props.addProductToCart(product);
    }

    navigateToCart() {
        const { history } = this.props;
        history.push(cartPath());
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
                onClick={(e) => this.navigateToCart(e)}
            >
                {cartIcon}
            </IconButton>
        );
    }
}

const mapStateToProps = ({cart: {products}}) => ({products});

const mapDispatchToProps = (dispatch) => {
    return ({
        addProductToCart(product) {
            dispatch(addToCart(product));
        },
    });
};

const ButtonWithRouter = withRouter(Button);
export default connect(mapStateToProps, mapDispatchToProps)(ButtonWithRouter);
