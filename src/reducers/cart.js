import { get } from 'lodash';

import {
    ADD_TO_CART,
    INITIALIZE_CART,
    CLEAR_CART
} from '~/src/actions/cart';
import { loadState } from '~/src/helpers/persistance';


const listToProducts = (list) => {
    const products = [];
    for (let key of Object.keys(list)) {
        const { product, quantity } = list[key];
        const extendedProduct = Object.assign({}, product, { quantity }, {
            totalPrice: product.price * quantity
        });
        products.push(extendedProduct);
    }
    return products;
};

const addToCart = (list, item, quantity) => {
    let itemQuantity = get(list, `${item.id}.quantity`, 0) + quantity;
    list[item.id] = { product: item, quantity: itemQuantity };
    return list;
};

const INITIAL_STATE = {
    list: {},
    products: []
};

const cart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const list = addToCart(
                Object.assign({}, state.list),
                action.item,
                action.quantity
            );
            return Object.assign({}, state, {
                list: list,
                products: listToProducts(list)
            });
        case CLEAR_CART:
            return INITIAL_STATE;
        case INITIALIZE_CART:
            const cartState = loadState('cart');
            return Object.assign({}, state, cartState);
        default:
            return state;
    }
}

export default cart;