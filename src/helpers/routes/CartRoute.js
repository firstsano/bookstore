import React from 'react';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import CartPage from '~/src/containers/views/CartPage';
import { Consumer } from '~/src/containers/CartContext';
import { catalogPath } from './CatalogRoute';


export const cartPath = () => `/cart`;

export default {
    name: 'Cart',
    exact: true,
    strict: false,
    path: cartPath(),
    render: (props) => (
        <Consumer>
            {({products}) => {
                if (isEmpty(products)) {
                    return <Redirect to={{
                        pathname: catalogPath(),
                        state: { withMessage: "Ваша корзина пуста" }
                    }}/>
                }
                return <CartPage />;
            }}
        </Consumer>
    )
};
