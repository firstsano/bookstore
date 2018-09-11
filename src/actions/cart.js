const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = (item, quantity = 1) => ({
    type: ADD_TO_CART,
    item,
    quantity
});

export {
    ADD_TO_CART,
    addToCart,
};
