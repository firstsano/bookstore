import React, { Component } from 'react';
import { createContext } from 'react';

const CartContext = createContext();


class CartContainer extends Component {
    constructor(props) {
        super(props);
        const cart = new Map();
        this.addToCart = this.addToCart.bind(this);
        this.state = { cart };
    }

    addToCart(item, quantity = 1) {
        const { cart } =  this.state;
        let itemQuantity = cart.has(item) ? quantity + cart.get(item) : quantity;
        cart.set(item, itemQuantity);
        this.setState({cart});
    }

    getProducts() {
        const { cart } = this.state;
        const keys = cart.keys();
        const products = [];
        for (let key of keys) {
            const quantity = cart.get(key);
            const product = Object.assign({}, key, { quantity }, {
                totalPrice: key.price * quantity
            });
            products.push(product);
        }
        return products;
    }

    render() {
        const addToCart = this.addToCart,
              products = this.getProducts()
        ;

        return (
            <CartContext.Provider value={{ addToCart, products }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export const Provider = CartContainer;
export const Consumer = CartContext.Consumer;
export default CartContainer;