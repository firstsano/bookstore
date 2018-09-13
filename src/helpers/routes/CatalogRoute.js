import React from 'react';

import CatalogPage from '~/src/views/CatalogPage';


export const catalogPath = () => '/';

export default {
    name: 'Catalog',
    exact: true,
    strict: false,
    path: catalogPath(),
    render: () => <CatalogPage />
};