import {
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_FAILURE
} from '~/src/actions/gallery';


const INITIAL_STATE = {
    isLoading: false,
    products: [],
};

const gallery = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_GALLERY_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_GALLERY_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                products: action.products,
            });
        case FETCH_GALLERY_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                status: action.status
            });
        default:
            return state;
    }
}

export default gallery;
