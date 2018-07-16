import React from 'react';
import ReactDOM from 'react-dom';

import Image from './src/Image';

import products from './src/constants/Products';
const product = products[0];

ReactDOM.render(
    <Image src={product.imageUrl} width='100px' height='100px' alt={product.title} />,
    document.getElementById('root')
);