import {
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_FAILURE
} from '~/src/actions/order';


const INITIAL_STATE = {
    isLoading: false,
};

const catalog = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SEND_ORDER_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SEND_ORDER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
            });
        case SEND_ORDER_FAILURE:
            return Object.assign({}, state, {
                isFetched: true,
            });
        default:
            return state;
    }
}

export default catalog;
