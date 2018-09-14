import { filter, includes } from 'lodash';

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_FILTER
} from '~/src/actions/catalog';


const INITIAL_STATE = {
    isLoading: false,
    isFetched: false,
    filteredProducts: [],
    products: []
};

const catalog = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SET_FILTER:
            const filteredProducts = filter(state.products, (product) => includes(action.filter, product.id));
            return Object.assign({}, state, {
                filteredProducts,
            });
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isFetched: true,
                filteredProducts: action.response,
                products: action.response,
            });
        case FETCH_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isFetched: true,
                isLoading: false,
                status: action.status
            });
        default:
            return state;
    }
}

export default catalog;
