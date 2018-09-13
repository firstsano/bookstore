import { LOCAL_STORAGE } from '~/src/middleware/localStorage';


export const
    ADD_TO_CART = 'ADD_TO_CART',
    INITIALIZE_CART = 'INITIALIZE_CART'
;

export const addToCart = (item, quantity = 1) => ({
    [LOCAL_STORAGE]: { source: 'cart' },
    type: ADD_TO_CART,
    item,
    quantity
});

export const initializeCart = () => ({
    type: INITIALIZE_CART
});
