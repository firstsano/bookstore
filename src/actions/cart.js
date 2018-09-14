import { LOCAL_STORAGE } from '~/src/middleware/localStorage';


export const
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    INITIALIZE_CART = 'INITIALIZE_CART',
    CLEAR_CART = 'CLEAR_CART'
;

export const addToCart = (item, quantity = 1) => ({
    [LOCAL_STORAGE]: { source: 'cart' },
    type: ADD_TO_CART,
    item,
    quantity
});

export const removeFromCart = (item, quantity = 1) => ({
    [LOCAL_STORAGE]: { source: 'cart' },
    type: REMOVE_FROM_CART,
    item,
    quantity
});

export const removeItemFromCart = (item) => ({
    [LOCAL_STORAGE]: { source: 'cart' },
    type: REMOVE_ITEM_FROM_CART,
    item
});

export const initializeCart = () => ({
    type: INITIALIZE_CART
});

export const clearCart = () => ({
    [LOCAL_STORAGE]: { source: 'cart' },
    type: CLEAR_CART
});