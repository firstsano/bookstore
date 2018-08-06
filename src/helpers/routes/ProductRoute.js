import React from 'react';


export const productPath = (id = ':id') => `/products/${id}`;

export default {
    name: 'Single Product',
    exact: true,
    strict: false,
    path: productPath(),
    render: () => "product"
};