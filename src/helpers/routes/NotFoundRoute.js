import React from 'react';

import NotFoundPage from '~/src/views/NotFoundPage';


export const notFoundPath = () => `/404`;

export default {
    name: 'Not Found',
    exact: true,
    strict: false,
    render: () => <NotFoundPage />
};