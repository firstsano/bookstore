import React, { Component } from 'react';
import { Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
    size,
    findIndex,
    max,
} from 'lodash';

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

const TIMEOUT = 5000;

class FavoriteProducts extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = { index: 0 };
    }

    componentDidMount() {
        this.delayNextProduct();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    delayNextProduct() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.nextProduct();
            this.delayNextProduct();
        }, TIMEOUT);
    }

    nextProduct(step = 1) {
        const length = max([size(this.props.products || []) - 1, 0]);
        let index = this.state.index + step;
        if (index < 0) { index = length; }
        if (index > length) { index = 0; }
        this.setState({ index });
    }

    handleNextProduct(step = 1) {
        this.nextProduct(step);
        this.delayNextProduct();
    }

    render() {
        const { classes, isFetched, products } = this.props;
        const product = products[this.state.index];

        if (!isFetched || !product) {
            return 'Загрузка...';
        }

        return (
            <div className={classes.root}>
                <SimpleProductCard product={product} />
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonRight].join(' ')}
                    onClick={() => this.handleNextProduct(1)}
                >
                    <Icon>navigate_next_icon</Icon>
                </Button>
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonLeft].join(' ')}
                    onClick={() => this.handleNextProduct(-1)}
                >
                    <Icon>navigate_before_icon</Icon>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(FavoriteProducts);
