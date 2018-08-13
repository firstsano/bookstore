import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Chip,
    Avatar,
    TableCell,
    TableRow,
} from '@material-ui/core';

import { cartItemType } from '~/src/helpers/types';
import Price from '~/src/components/Price';
import Quantity from '~/src/components/Quantity';


class Row extends Component {
    static get propTypes() {
        return {
            product: cartItemType.isRequired
        };
    }

    render() {
        const {
            id,
            imageUrl,
            title,
            quantity,
            totalPrice,
            price
        } = this.props.product;

        return (
            <TableRow key={id}>
                <TableCell component="th" scope="row">
                    <Chip
                        avatar={<Avatar src={imageUrl} />}
                        label={title}
                    />
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