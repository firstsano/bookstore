import React, { Component } from 'react';
import { isEmpty, first } from 'lodash';
import { Redirect } from 'react-router-dom';

import Overview from '~/src/components/Product/Overview';
import { notFoundPath } from '~/src/helpers/routes/NotFoundRoute';
import { getProduct } from '~/src/helpers/contentful';


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = { product: null }
    }

    componentDidMount() {
        this.fetchProduct();
    }

    async fetchProduct() {
        const products = await getProduct(this.props.productId);
        if (isEmpty(products)) {
            this.setState({ product: false });
        }
        const product = first(products);
        this.setState({ product });
    }

    render() {
        const { product } = this.state;
        if (product === null) {
            return 'Загрузка...';
        } else if (product === false) {
            return <Redirect to={{ pathname: notFoundPath() }}/>
        }
        return <Overview product={product} />;
    }
}

export default ProductPage;