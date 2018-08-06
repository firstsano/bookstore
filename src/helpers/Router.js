import React, { Fragment } from 'react';
import {
    BrowserRouter as BaseRouter,
    Switch as BaseSwitch,
    Route
} from 'react-router-dom';

import CartRoute from './routes/CartRoute';
import CatalogRoute from './routes/CatalogRoute';
import ContactsRoute from './routes/ContactsRoute';
import ProductRoute from './routes/ProductRoute';


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
    <BaseRouter>
        <Fragment>
            {children}
        </Fragment>
    </BaseRouter>
);