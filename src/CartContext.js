import { createContext } from 'react';

import products from './constants/Products';

const CartContext = createContext();

export const Provider = CartContext.Provider;
export const Consumer = CartContext.Consumer;
export default CartContext;