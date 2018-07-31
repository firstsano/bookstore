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
        let itemQuantity = quantity;
        if (cart.has(item)) { itemQuantity += cart.get(item); }
        cart.set(item, itemQuantity);
        this.setState({cart});
        console.log(cart);
    }

    render() {
        const { cart } = this.state,
              addToCart = this.addToCart
        ;
        return (
            <CartContext.Provider value={{ cart, addToCart }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export function withCartContext(Component) {
  return function CartedComponent(props) {
    return (
      <CartContext.Consumer>
        {({cart, addToCart}) => <Component {...props} cart={cart} addToCart={addToCart} />}
      </CartContext.Consumer>
    );
  };
}

export const Provider = CartContainer;
export const Consumer = CartContext.Consumer;
export default CartContainer;