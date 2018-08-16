import React, { Component } from 'react';
import { Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { first, size, findIndex } from 'lodash';

import SimpleProductCard from '~/src/components/Product/SimpleProductCard';


const styles = {
    root: {
        position: 'relative'
    },
    button: {
        opacity: 0.9,
        position: 'absolute',
        top: '50%',
        marginTop: -25
    },
    buttonLeft: {
        left: 10,
    },
    buttonRight: {
        right: 10
    },
};

let timer = null;

const TIMEOUT = 5000;

class FavoriteProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: first(props.products)
        };
    }

    componentDidMount() {
        this.delayNextProduct();
    }

    componentWillUnmount() {
        clearTimeout(timer);
    }

    delayNextProduct() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            this.nextProduct();
            this.delayNextProduct();
        }, TIMEOUT);
    }

    nextProduct(step = 1) {
        const { products } = this.props;
        const { current } = this.state;
        let index = findIndex(products, (product) => (product == current)) + step;
        if (index < 0) { index = size(products) - 1; }
        if (index >= size(products)) { index = 0; }
        this.setState({ current: products[index] })
    }

    handleNextProduct(step = 1) {
        this.nextProduct(step);
        this.delayNextProduct();
    }

    render() {
        const { current: product } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <SimpleProductCard product={product} />
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonRight].join(' ')}
                    onClick={(e) => this.handleNextProduct(1)}
                >
                    <Icon>navigate_next_icon</Icon>
                </Button>
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonLeft].join(' ')}
                    onClick={(e) => this.handleNextProduct(-1)}
                >
                    <Icon>navigate_before_icon</Icon>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(FavoriteProducts);
