import React from 'react';

import CartPage from '~/src/containers/views/CartPage';


export const cartPath = () => `/cart`;

export default {
    name: 'Cart',
    exact: true,
    strict: false,
    path: cartPath(),
    render: () => <CartPage />
};