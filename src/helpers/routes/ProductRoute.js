import React from 'react';

import ProductPage from '~/src/containers/views/ProductPage';


export const productPath = (id = ':id') => `/products/${id}`;

export default {
    name: 'Single Product',
    exact: true,
    strict: false,
    path: productPath(),
    render: ({match}) => {
        const { id } = match.params;
        return <ProductPage productId={id} />;
    }
};