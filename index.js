import React from 'react';
import ReactDOM from 'react-dom';

import ProductCard from './src/ProductCard';

import products from './src/constants/Products';

const productCards = products.map((product) => {
    return (
        <div className="col s3">
            <ProductCard product={product} />
        </div>
    );
});

ReactDOM.render(
    <div className="row"> {productCards} </div>,
    document.getElementById('root')
);