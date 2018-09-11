import React, { Component } from 'react';
import {
    Paper,
    Table as BaseTable,
    TableBody
} from '@material-ui/core';
import { connect } from 'react-redux';

import Header from './Header';
import Row from './Row';


class Table extends Component {
    render() {
        return (
            <Paper>
                <BaseTable>
                    <Header />
                    <TableBody>
                        { this.props.products.map(product => <Row key={product.id} product={product} />) }
                    </TableBody>
                </BaseTable>
            </Paper>
        );
    }
}

const mapStateToProps = ({cart: {products}}) => ({products});

export default connect(mapStateToProps)(Table);
