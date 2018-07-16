import React from 'react';
import ReactDOM from 'react-dom';

import TextBox from './src/TextBox';

import products from './src/constants/Products';
const product = products[0];

ReactDOM.render(
    <TextBox> {product.title} </TextBox>,
    document.getElementById('root')
);