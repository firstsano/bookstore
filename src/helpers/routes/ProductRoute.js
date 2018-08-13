import React from 'react';
import { Redirect } from 'react-router-dom';

import products from '~/src/constants/Products';
import { notFoundPath } from '~/src/helpers/routes/NotFoundRoute';
import ProductPage from '~/src/containers/views/ProductPage';


export const productPath = (id = ':id') => `/products/${id}`;

export default {
    name: 'Single Product',
    exact: true,
    strict: false,
    path: productPath(),
    render: ({match}) => {
        const { id } = match.params;
        const product = products.find(item => item.id === Number.parseInt(id));
        if (!product) {
            return <Redirect to={{pathname: notFoundPath()}} />
        }
        return <ProductPage product={product} />;
    }
};