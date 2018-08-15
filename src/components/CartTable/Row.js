import React, { Component } from 'react';
import {
    Avatar,
    TableCell,
    TableRow,
} from '@material-ui/core';

import { cartItemType } from '~/src/helpers/types';
import Price from '~/src/components/Price';
import ProductChip from '~/src/components/Product/ProductChip';
import Quantity from '~/src/components/Quantity';


class Row extends Component {
    static get propTypes() {
        return {
            product: cartItemType.isRequired
        };
    }

    render() {
        const { product } = this.props;
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
                    <Quantity> {quantity} </Quantity>
                </TableCell>
                <TableCell numeric>
                    <Price> {totalPrice} </Price>
                </TableCell>
            </TableRow>
        );
    }
}

export default Row;