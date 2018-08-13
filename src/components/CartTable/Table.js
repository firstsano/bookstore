import React, { Component } from 'react';
import {
    Paper,
    Table as BaseTable,
    TableBody
} from '@material-ui/core';

import { Consumer } from '~/src/containers/CartContext';
import Header from './Header';
import Row from './Row';


class Table extends Component {
    render() {
        return (
            <Paper>
                <BaseTable>
                    <Header />
                    <TableBody>
                        <Consumer >
                            {({products}) => (
                                products.map(product => <Row key={product.id} product={product} />)
                            )}
                        </Consumer>
                    </TableBody>
                </BaseTable>
            </Paper>
        );
    }
}

export default Table;