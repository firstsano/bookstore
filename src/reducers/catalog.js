import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '~/src/actions/catalog';


const INITIAL_STATE = {
    isLoading: false,
    isFetched: false,
    products: []
};

const catalog = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isFetched: true,
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
