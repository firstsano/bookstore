import React from 'react';

import CatalogPage from '~/src/views/CatalogPage';
import { fetchProducts } from '~/src/actions/catalog';
import { fetchGallery } from '~/src/actions/gallery';


export const catalogPath = () => '/';

export default {
    name: 'Catalog',
    exact: true,
    strict: false,
    path: catalogPath(),
    render: () => <CatalogPage />,
    prepareData: (store) => {
        return Promise.all([
            store.dispatch(fetchProducts()),
            store.dispatch(fetchGallery())
        ]);
    }
};