import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import Catalog from '~/src/components/Catalog';
import FavoriteProducts from '~/src/components/FavoriteProducts';
import AutoSnack from '~/src/components/AutoSnack';
import { fetchProducts } from '~/src/actions/catalog';
import { fetchGallery } from '~/src/actions/gallery';


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
    }

    componentDidMount() {
        this.props.loadProducts();
        this.props.loadGallery();
    }

    render() {
        const {
            location,
            classes,
            products,
            favoriteProducts,
            catalogLoading,
            galleryLoading
        } = this.props;

        return (
            <Fragment>
                <Paper className={classes.paper}>
                    {galleryLoading && 'Загрузка...'}
                    {!isEmpty(favoriteProducts) && <FavoriteProducts products={favoriteProducts} />}
                </Paper>
                <Divider className={classes.divider} />
                <Paper className={classes.paper}>
                    {catalogLoading && 'Загрузка...'}
                    {!isEmpty(products) && <Catalog products={products} />}
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

const mapStateToProps = (state) => {
    return {
        galleryLoading: state.gallery.isLoading,
        favoriteProducts: state.gallery.products,
        catalogLoading: state.catalog.isLoading,
        products: state.catalog.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loadProducts() {
            dispatch(fetchProducts());
        },

        loadGallery() {
            dispatch(fetchGallery());
        }
    });
};

const CatalogPageWithStyles = withStyles(styles)(CatalogPage);
const CatalogPageWithRouter = withRouter(CatalogPageWithStyles);
const FinalCatalogPage = connect(mapStateToProps, mapDispatchToProps)(CatalogPageWithRouter);

export default FinalCatalogPage;
