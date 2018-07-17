import React, { Component } from 'react';

class Catalog extends Component {
    render() {
        const { products } = this.props;
        const productsList = products.map((product, index) => {
            return (
                <li className="card-panel grey lighten-5 z-depth-1" key={index}>
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <div className="circle responsive-img"
                                 style={{
                                     width: 100,
                                     height: 100,
                                     backgroundImage: `url(${product.imageUrl})`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center center'
                                }}
                            ></div>
                        </div>
                        <div className="col s10">
                            <span className="black-text"> {product.text} </span>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <ul> {productsList} </ul>
        );
    }
}

export default Catalog;