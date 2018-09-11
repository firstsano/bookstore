import { ADD_TO_CART } from '~/src/actions/cart';


const INITIAL_STATE = {
    map: new Map(),
    products: []
};

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

const cart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const
                cart = new Map(state.map),
                { item, quantity } = action
            ;
            let itemQuantity = cart.has(item) ? quantity + cart.get(item) : quantity;
            cart.set(item, itemQuantity);
            return Object.assign({}, state, {
                map: cart,
                products: cartToProducts(cart)
            });
        default:
            return state;
    }
}

export default cart;