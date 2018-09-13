import { get } from 'lodash';

import { ADD_TO_CART, INITIALIZE_CART } from '~/src/actions/cart';
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
}

const INITIAL_STATE = {
    list: {},
    products: []
};

const cart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const
                list = Object.assign({}, state.list),
                { item, quantity } = action
            ;
            let itemQuantity = get(list, `${item.id}.quantity`, 0) + quantity;
            list[item.id] = { product: item, quantity: itemQuantity };
            return Object.assign({}, state, {
                list: list,
                products: listToProducts(list)
            });
        case INITIALIZE_CART:
            const cartState = loadState('cart');
            return Object.assign({}, state, cartState);
        default:
            return state;
    }
}

export default cart;