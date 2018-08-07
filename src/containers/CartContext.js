import React, { Component } from 'react';
import { createContext } from 'react';

const CartContext = createContext();


class CartContainer extends Component {
    constructor(props) {
        super(props);
        const cart = new Map();
        this.addToCart = this.addToCart.bind(this);
        this.cartProducts = this.cartProducts.bind(this);
        this.state = { cart };
    }

    addToCart(item, quantity = 1) {
        const { cart } =  this.state;
        let itemQuantity = quantity;
        if (cart.has(item)) { itemQuantity += cart.get(item); }
        cart.set(item, itemQuantity);
        this.setState({cart});
        console.log(cart);
    }

    cartProducts() {
        const { cart } = this.state;
        const products = cart.keys();
        let output = [];
        for (let product of products) {
            let extendedProduct = Object.assign({},
                product,
                { quantity: cart.get(product) }
            );
            extendedProduct.totalPrice = extendedProduct.price * extendedProduct.quantity;
            output.push(extendedProduct);
        }
        return output;
    }

    render() {
        const { cart } = this.state,
              addToCart = this.addToCart,
              cartProducts = this.cartProducts()
        ;
        return (
            <CartContext.Provider value={{ cart, addToCart, cartProducts }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export function withCartContext(Component) {
  return function CartedComponent(props) {
    return (
      <CartContext.Consumer>
        {({cart, addToCart, cartProducts}) => (
            <Component {...props}
                       {...{cart, addToCart, cartProducts}}
            />
        )}
      </CartContext.Consumer>
    );
  };
}

export const Provider = CartContainer;
export const Consumer = CartContext.Consumer;
export default CartContainer;