import CartRoute from './CartRoute';
import CatalogRoute from './CatalogRoute';
import ContactsRoute from './ContactsRoute';
import ProductRoute from './ProductRoute';
import ImageRoute from './ImageRoute';
import NotFoundRoute from './NotFoundRoute';


const routes = [
    CartRoute,
    CatalogRoute,
    ContactsRoute,
    ProductRoute,
    ImageRoute
];

// Always be the last
routes.push(NotFoundRoute);

export default routes;