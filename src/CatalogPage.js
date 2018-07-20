import React, { Component } from 'react';

import products from './constants/Products';
import Catalog from './Catalog';

class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products };
    }

    render() {
        return <Catalog products={this.state.products} />;
    }
}

export default CatalogPage;