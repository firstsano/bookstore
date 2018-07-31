import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Avatar
} from '@material-ui/core';

import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';
import PurchaseControls from './PurchaseControls';


const styles = {
    chip: {
        whiteSpace: 'normal'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    
};

class ProductCard extends Component {
    onDragStart(event, product) {
        event.dataTransfer.setData('text/plain', JSON.stringify(product));
    }

    render() {
        const { product, classes } = this.props;
        const avatar = <Avatar>
            <Image
                src={product.imageUrl}
                height='50px'
            />
        </Avatar>;
        const title = <TextBox> {product.title} </TextBox>;
        const price = <Price currency="руб."> {product.price} </Price>;

        return (
            <Card
                draggable
                onDragStart={(e) => this.onDragStart(e, product)}
            >
                <CardMedia
                    className={classes.media}
                    image={product.imageUrl}
                    title={product.title}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Chip
                                avatar={avatar}
                                label={title}
                                classes={{label: classes.chip}}
                            />
                            <Typography component="p"> {price} </Typography>
                        </Grid>
                        <Grid container item xs={4}>
                            <PurchaseControls product={product} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);