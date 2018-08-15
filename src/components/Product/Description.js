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
import Gallery from '~/src/components/Gallery';


const styles = (theme) => ({
    root: {
        height: '100%',
    },
    title: {
        padding: 10,
    },
    gallery: {
        flexGrow: 1,
        padding: 10,
        borderStyle: 'solid none',
        borderWidth: 1,
        overflowY: 'auto',
        borderColor: theme.palette.primary.main
    },
    mainImage: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        display: 'block'
    },
    properties: {
        padding: '20px 10px'
    },
    price: {
        float: 'right',
        fontWeight: 'bold'
    }
});

class Description extends Component {
    static get propTypes() {
        return {
            product: productType.isRequired
        };
    }

    render() {
        const { classes, product, onImageSelect } = this.props;
        const { title, price, images } = product;

        return (
            <Grid
                container
                direction="column"
                className={classes.root}
            >
                <Grid item>
                    <Typography variant="title" className={classes.title} > {title} </Typography>
                </Grid>
                <Grid item className={classes.gallery}>
                    <Gallery
                        images={images}
                        onImageSelect={onImageSelect}
                    />
                </Grid>
                <Grid item className={classes.properties} >
                    <Typography variant="caption">
                        Стоимость:
                        <Price className={classes.price}> {price} </Price>
                    </Typography>
                </Grid>
                <Grid item>
                    <Consumer>
                        {({addToCart}) => (
                            <PurchaseControls
                                onlyButton
                                addToCart={addToCart}
                                product={product}
                            />
                        )}
                    </Consumer>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Description);