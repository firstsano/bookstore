import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import _ from 'lodash';


const styles = {
    input: {
        width: '30px',
        maxWidth: '100%',
        margin: 'auto',
    }
};

class PurchaseControls extends Component {
    static get defaultProps() {
        return {
            variant: 'fab'
        };
    }

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.state = { quantity: 1 };
    }

    changeQuantity(e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        const quantity = _.isEmpty(value) ? 0 : Number.parseInt(value);
        this.setState({ quantity });
    }

    addToCart() {
        const { props: { product, addToCart }, state: { quantity } } = this;
        addToCart(product, quantity);
    }

    render() {
        const { variant, buttonClass, classes } = this.props;

        return (
            <Grid container>
                <Grid item container xs={6}>
                    <TextField
                        value={this.state.quantity}
                        onChange={this.changeQuantity}
                        margin="dense"
                        className={classes.input}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        onClick={this.addToCart}
                        variant={variant}
                        color="primary"
                        aria-label="Add to card"
                        className={buttonClass}
                    >
                        <ShoppingBasketIcon />
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PurchaseControls);