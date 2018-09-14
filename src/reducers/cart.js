import { get } from 'lodash';

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_ITEM_FROM_CART,
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

const INITIAL_STATE = {
    list: {},
    products: []
};

const cart = (state = INITIAL_STATE, action) => {
    let list = Object.assign({}, state.list);
    let itemQuantity = 0;
    const { item, quantity } = action;

    switch(action.type) {
        case ADD_TO_CART:
            itemQuantity = get(list, `${item.id}.quantity`, 0) + quantity;
            list[item.id] = { product: item, quantity: itemQuantity };
            return Object.assign({}, state, { list }, {
                products: listToProducts(list)
            });

        case REMOVE_FROM_CART:
            itemQuantity = get(list, `${item.id}.quantity`, 0) - quantity;
            list[item.id] = { product: item, quantity: itemQuantity };
            if (itemQuantity <= 0) {
                delete list[item.id];
            }
            return Object.assign({}, state, { list }, {
                products: listToProducts(list)
            });

        case REMOVE_ITEM_FROM_CART:
            debugger;
            delete list[item.id];
            return Object.assign({}, state, { list }, {
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