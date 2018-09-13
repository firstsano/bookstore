import React from 'react';

import ImagePage from '~/src/views/ImagePage';


export const imagePath = (id = ':id') => `/img/${id}`;

export default {
    name: 'Single Image',
    exact: true,
    strict: false,
    path: imagePath(),
    render: ({ match }) => {
        const { id } = match.params;
        return <ImagePage id={id} />;
    }
};
