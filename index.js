import React from 'react';
import ReactDOM from 'react-dom';

import Catalog from './src/Catalog';

import products from './src/constants/Products';

const productsList = products.map((product) => ({
    imageUrl: product.imageUrl,
    text: product.title
}));

ReactDOM.render(
    <Catalog products={productsList} />,
    document.getElementById('root')
);