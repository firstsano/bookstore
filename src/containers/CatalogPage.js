import React, { Component } from 'react';

import products from '~/src/constants/Products';
import Catalog from '~/src/components/Catalog';


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