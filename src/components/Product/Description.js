import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Divider,
} from '@material-ui/core';

import { Consumer } from '~/src/containers/CartContext';
import { productType } from '~/src/helpers/types';
import PurchaseControls from '~/src/components/Product/PurchaseControls';
import Price from '~/src/components/Price';


const styles = {
    root: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    title: {
        padding: '10px',
        marginBottom: 'auto'
    },
    divider: {
        margin: '10px 0',
        width: '100%',
    },
    mainImage: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        display: 'block'
    },
    property: {
        textAlign: 'right',
        fontWeight: 'bold'
    },
    button: {
        width: '100%'
    }
};

class Description extends Component {
    static get propTypes() {
        return {
            product: productType.isRequired
        };
    }

    render() {
        const { classes, product } = this.props;
        const { title, price } = product;

        return (
            <Grid container className={classes.root}>
                <Typography
                    variant="title"
                    className={classes.title}
                >
                    {title}
                    <Divider className={classes.divider} />
                </Typography>
                <Grid container>
                    <Divider className={classes.divider} />
                    <Grid item xs={6}>
                        <Typography variant="caption"> Стоимость: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="caption" className={classes.property}>
                            <Price> {price} </Price>
                        </Typography>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Consumer>
                    {({addToCart}) => (
                        <PurchaseControls
                            addToCart={addToCart}
                            product={product}
                            variant="extendedFab"
                            buttonClass={classes.button}
                        />
                    )}
                </Consumer>
            </Grid>
        );
    }
}

export default withStyles(styles)(Description);