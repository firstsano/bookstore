import React from 'react';

import NotFoundPage from '~/src/containers/views/NotFoundPage';


export const notFoundPath = () => `/404`;

export default {
    name: 'Not Found',
    exact: true,
    strict: false,
    render: () => <NotFoundPage />
};