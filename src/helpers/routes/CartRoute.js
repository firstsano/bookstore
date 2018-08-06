import React from 'react';


export const cartPath = () => `/cart`;

export default {
    name: 'Cart',
    exact: true,
    strict: false,
    path: cartPath(),
    render: () => "cart"
};