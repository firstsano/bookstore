import React, { Component } from 'react';

import products from './constants/Products';
import Catalog from './Catalog';

class CatalogPage extends Component {
    constructor() {
        super(arguments);
        const productList = products.map((product) => ({
            imageUrl: product.imageUrl,
            text: product.title
        }));
        this.state = { products: productList };
    }

    render() {
        return <Catalog products={this.state.products} />;
    }
}

export default CatalogPage;