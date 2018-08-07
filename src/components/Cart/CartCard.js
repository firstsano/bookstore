import React, { Component } from 'react';
import {
    Chip,
    Avatar,
    Paper,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody
} from '@material-ui/core';

import Price from '~/src/components/Price';


const currency = 'руб.';

class CartCard extends Component {
    render() {
        const { products } = this.props;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Наименование </TableCell>
                            <TableCell numeric> Цена </TableCell>
                            <TableCell numeric> Количество </TableCell>
                            <TableCell numeric> Общая цена </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    <Chip
                                        avatar={<Avatar src={product.imageUrl} />}
                                        label={product.title}
                                    />
                                </TableCell>
                                <TableCell numeric>
                                    <Price currency={currency} > {product.price} </Price>
                                </TableCell>
                                <TableCell numeric>
                                    <Price currency={'шт.'} > {product.quantity} </Price>
                                </TableCell>
                                <TableCell numeric>
                                    <Price currency={currency} > {product.totalPrice} </Price>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default CartCard;