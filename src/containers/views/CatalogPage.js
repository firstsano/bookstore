import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { get, first } from 'lodash';

import Catalog from '~/src/components/Catalog';
import AutoSnack from '~/src/components/AutoSnack';
import { getProducts } from '~/src/helpers/Contentful';


const PRODUCT_ATTRIBUTES = ['id', 'title', 'price', 'images'];

class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    async fetchProducts() {
        const productItems = await getProducts();
        this.setUpProductsFromResponse(productItems);
    }

    setUpProductsFromResponse(products) {
        const parsedProducts = [];
        for (let product of products) {
            const parsedProduct = {};
            PRODUCT_ATTRIBUTES.forEach((attribute) => {
                const value = get(product, `fields.${attribute}`);
                parsedProduct[attribute] = value;
            })
            parsedProduct.mainImage = first(parsedProduct.images);
            parsedProducts.push(parsedProduct);
        }
        this.setState({ products: parsedProducts });
    }

    render() {
        const { location } = this.props;

        return (
            <Fragment>
                <Catalog products={this.state.products} />
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

export default withRouter(CatalogPage);