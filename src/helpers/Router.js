import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
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

export default () => (
    <Router>
        <Switch>
            {routes.map((props) => <Route key={props.name} {...props} />)}
        </Switch>
    </Router>
);