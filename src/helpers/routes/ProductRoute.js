import React from 'react';

import ProductPage from '~/src/views/ProductPage';
import { fetchProduct } from '~/src/actions/catalog';


export const productPath = (id = ':id') => `/products/${id}`;

export default {
    name: 'Single Product',
    exact: true,
    strict: false,
    path: productPath(),
    render: ({ match }) => {
        const { id } = match.params;
        return <ProductPage productId={id} />;
    },
    prepareData: (store, query, params) => {
        return store.dispatch(fetchProduct(params.id));
    }
};