import React from 'react';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

import CartPage from '~/src/containers/views/CartPage';
import { catalogPath } from './CatalogRoute';


export const cartPath = () => `/cart`;

const render = (props) => {
    if (isEmpty(props.products)) {
        return <Redirect to={{
            pathname: catalogPath(),
            state: { withMessage: "Ваша корзина пуста" }
        }}/>
    }
    return <CartPage />;
};

const mapStateToProps = ({cart: {products}}) => ({products});

const renderWithProducts = connect(mapStateToProps)(render);

export default {
    name: 'Cart',
    exact: true,
    strict: false,
    path: cartPath(),
    component: renderWithProducts
};