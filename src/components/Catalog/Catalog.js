import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import ProductCard from '~/src/components/Product/ProductCard';


const styles = {
    list: {
        padding: 0,
    },
    listItem: {
        display: 'block'
    }
};

class Catalog extends Component {
    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        const { isFetched, products = [], classes } = this.props;

        if (!isFetched) {
            return 'Загрузка...';
        }

        const productsList = products.map((product) =>
            <Grid item component='li' className={classes.listItem} key={product.id} xs={4}>
                <ProductCard product={product} />
            </Grid>
        );

        return (
            <Grid container
                    component='ul'
                    spacing={24}
                    className={classes.list}
            >
                {productsList}
            </Grid>
        );
    }
}

export default withStyles(styles)(Catalog);