import isEmpty from 'lodash-es/isEmpty';
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
    Button,
    TextField
} from '@material-ui/core';

import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';

const styles = {
    chip: {
        whiteSpace: 'normal'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    input: {
        width: '30px',
        maxWidth: '100%',
        margin: 'auto',
    }
};

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.state = { quantity: 1 };
    }

    changeQuantity(e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        const quantity = isEmpty(value) ? 0 : Number.parseInt(value);
        this.setState({ quantity });
    }

    addToCart() {
        const { props: { product, addToCart }, state: { quantity } } = this;
        addToCart(product, quantity);
    }

    render() {
        const { product, classes } = this.props;
        const { quantity } = this.state;
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
                        <Grid item xs={8}>
                            <Chip
                                avatar={avatar}
                                label={title}
                                classes={{label: classes.chip}}
                            />
                            <Typography component="p"> {price} </Typography>
                        </Grid>
                        <Grid container item xs={4}>
                            <Grid container item xs={6}>
                                <TextField
                                    value={quantity}
                                    onChange={this.changeQuantity}
                                    margin="dense"
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    onClick={this.addToCart}
                                    variant="fab"
                                    color="primary"
                                    aria-label="Add to card"
                                    className={classes.button}
                                >
                                    <ShoppingBasketIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);