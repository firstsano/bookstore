import React from 'react';

import CatalogPage from '~/src/containers/views/CatalogPage';


export const catalogPath = () => '/';

export default {
    name: 'Catalog',
    exact: true,
    strict: false,
    path: catalogPath(),
    render: () => <CatalogPage />
};