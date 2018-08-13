import React, { Component } from 'react';
import {
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';


class Header extends Component {
    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell> Наименование </TableCell>
                    <TableCell numeric> Цена </TableCell>
                    <TableCell numeric> Количество </TableCell>
                    <TableCell numeric> Общая цена </TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default Header;