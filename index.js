import React from 'react';
import ReactDOM from 'react-dom';

import Price from './src/Price';

import products from './src/constants/Products';
const product = products[0];

ReactDOM.render(
    <div>
        {product.title} :
        <Price currency='руб.'> {product.price} </Price>
    </div>,
    document.getElementById('root')
);