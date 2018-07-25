import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Avatar,
    Button
} from '@material-ui/core';

import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';

const styles = {
    chip: {
        whiteSpace: 'normal'
    },
    button: {
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    }
};

class ProductCard extends Component {
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

        return(
            <Card>
                <CardMedia
                    className={classes.media}
                    image={product.imageUrl}
                    title={product.title}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={9}>
                            <Chip avatar={avatar} label={title} classes={{label: classes.chip}} />
                            <Typography component="p"> {price} </Typography>
                        </Grid>
                        <Grid container item xs={3}>
                            <Button variant="fab" color="primary" aria-label="Add to card" className={classes.button}>
                                <ShoppingBasketIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);