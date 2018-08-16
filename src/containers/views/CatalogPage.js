import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';
import { isEmpty } from 'lodash';

import Catalog from '~/src/components/Catalog';
import FavoriteProducts from '~/src/components/FavoriteProducts';
import AutoSnack from '~/src/components/AutoSnack';
import { getProducts, getFavoriteProducts } from '~/src/helpers/contentful';


const styles = {
    paper: {
        padding: 10
    },
    divider: {
        margin: '20px 0'
    }
}

class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteProducts: [],
            products: []
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    async fetchProducts() {
        const [ products, favoriteProducts ] = await Promise.all([
            getProducts(),
            getFavoriteProducts()
        ]);
        this.setState({ products, favoriteProducts });
    }

    render() {
        const { products, favoriteProducts } = this.state;
        const { location, classes } = this.props;

        if (isEmpty(products) || isEmpty(favoriteProducts)) {
            return 'Загрузка...';
        }
        return (
            <Fragment>
                <Paper className={classes.paper}>
                    <FavoriteProducts products={favoriteProducts} />
                </Paper>
                <Divider className={classes.divider} />
                <Paper className={classes.paper}>
                    <Catalog products={products} />
                </Paper>
                {location.state && location.state.withMessage &&
                    <AutoSnack
                        duration={3000}
                        message={location.state.withMessage}
                    />
                }
            </Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(CatalogPage));