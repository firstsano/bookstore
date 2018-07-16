import React, { Component } from 'react';

import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return(
            <div className="card">
                <div className="card-image">
                    <Image src={product.imageUrl} alt={product.title} />
                </div>
                <div className="card-content">
                    <TextBox> {product.title} </TextBox>
                </div>
                <div class="card-action">
                    <Price currency="руб."> {product.price} </Price>
                </div>
            </div>
        );
    }
}

export default ProductCard;