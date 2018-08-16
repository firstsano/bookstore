import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core';

import Price from '~/src/components/Price';
import ProductChip from './ProductChip';
import PurchaseControls from './PurchaseControls';
import { Consumer } from '~/src/containers/CartContext';


const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%',
    }
};

class ProductCard extends Component {
    onDragStart(event, product) {
        event.dataTransfer.setData('text/plain', JSON.stringify(product));
    }

    render() {
        const { product, classes } = this.props;
        const { mainImage, title, price } = product;

        return (
            <Card
                draggable
                onDragStart={(e) => this.onDragStart(e, product)}
            >
                <CardMedia
                    className={classes.media}
                    image={mainImage.url}
                    title={title}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <ProductChip product={product} />
                            <Typography component="p">
                                <Price currency="руб."> {price} </Price>
                            </Typography>
                        </Grid>
                        <Grid container item xs={4}>
                            <Consumer>
                                {({addToCart}) => <PurchaseControls {...{addToCart, product}} />}
                            </Consumer>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);