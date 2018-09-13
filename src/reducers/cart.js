import { ADD_TO_CART, INITIALIZE_CART } from '~/src/actions/cart';
import { loadState } from '~/src/helpers/persistance';


const cartToProducts = (cart) => {
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

const listToMap = (list) => new Map(JSON.parse(list));

const mapToList = (map) => JSON.stringify([...map]);

const INITIAL_STATE = {
    list: mapToList(new Map()),
    products: []
};

const cart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const
                cart = listToMap(state.list),
                { item, quantity } = action
            ;
            let itemQuantity = cart.has(item) ? quantity + cart.get(item) : quantity;
            cart.set(item, itemQuantity);
            return Object.assign({}, state, {
                list: mapToList(cart),
                products: cartToProducts(cart)
            });
        case INITIALIZE_CART:
            const cartState = loadState('cart');
            return Object.assign({}, state, cartState);
        default:
            return state;
    }
}

export default cart;