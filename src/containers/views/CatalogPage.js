import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Catalog from '~/src/components/Catalog';
import AutoSnack from '~/src/components/AutoSnack';
import { getProducts } from '~/src/helpers/Contentful';


class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    async fetchProducts() {
        const products = await getProducts();
        this.setState({ products });
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