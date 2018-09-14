import React, { Component } from 'react';
import {
    TableCell,
    TableRow,
    IconButton
} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Clear from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import { cartItemType } from '~/src/helpers/types';
import Price from '~/src/components/Price';
import ProductChip from '~/src/components/Product/ProductChip';
import Quantity from '~/src/components/Quantity';
import {
    addToCart,
    removeFromCart,
    removeItemFromCart
} from '~/src/actions/cart';


const styles = {
    icon: {
        verticalAlign: 'middle',
    },
    quantity: {
        verticalAlign: 'middle',
        display: 'inline-block',
    }
};

class Row extends Component {
    static get propTypes() {
        return {
            product: cartItemType.isRequired
        };
    }

    render() {
        const {
            product,
            classes,
            addProductToCart,
            removeProductFromCart,
            removeItemFromCart
        } = this.props;
        const { id, quantity, totalPrice, price } = product;

        return (
            <TableRow key={id}>
                <TableCell component="th" scope="row">
                    <ProductChip product={product} />
                </TableCell>
                <TableCell numeric>
                    <Price> {price} </Price>
                </TableCell>
                <TableCell numeric>
                    <IconButton
                        onClick={() => addProductToCart(product)}
                        className={classes.icon}
                    >
                        <Add color="secondary" />
                    </IconButton>
                    <div className={classes.quantity}>
                        <Quantity> {quantity} </Quantity>
                    </div>
                    <IconButton
                        onClick={() => removeProductFromCart(product)}
                        className={classes.icon}
                    >
                        <Remove color="secondary" />
                    </IconButton>
                </TableCell>
                <TableCell numeric>
                    <Price> {totalPrice} </Price>
                </TableCell>
                <TableCell>
                    <IconButton
                        onClick={() => removeItemFromCart(product)}
                        className={classes.icon}
                    >
                        <Clear color="secondary" />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addProductToCart(product) {
            dispatch(addToCart(product));
        },
        removeProductFromCart(product) {
            dispatch(removeFromCart(product));
        },
        removeItemFromCart(product) {
            dispatch(removeItemFromCart(product));
        },
    });
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Row));