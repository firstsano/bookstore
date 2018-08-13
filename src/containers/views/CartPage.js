import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import CartTable from '~/src/components/CartTable/Table';


const styles = {
    title: {
        fontWeight: 'bold'
    }
}

class CartPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Typography
                    variant="title"
                    className={classes.title}
                >
                    Ваша корзина:
                </Typography>
                <CartTable />
            </Fragment>
        );
    }
}

export default withStyles(styles)(CartPage);