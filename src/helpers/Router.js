import React, { Fragment } from 'react';
import {
    Router as BaseRouter,
    Switch as BaseSwitch,
    Route
} from 'react-router-dom';

import CartRoute from './routes/CartRoute';
import CatalogRoute from './routes/CatalogRoute';
import ContactsRoute from './routes/ContactsRoute';
import ProductRoute from './routes/ProductRoute';
import history from './History';


const routes = [
    CartRoute,
    CatalogRoute,
    ContactsRoute,
    ProductRoute
];

export const Switch = () => (
    <BaseSwitch>
        {routes.map((props) => <Route key={props.name} {...props} />)}
    </BaseSwitch>
);

export const Router = ({children}) => (
    <BaseRouter history={history}>
        <Fragment>
            {children}
        </Fragment>
    </BaseRouter>
);