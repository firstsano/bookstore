import { getFavoriteProducts } from '~/src/helpers/contentful';


const
    FETCH_GALLERY_REQUEST = 'FETCH_GALLERY_REQUEST',
    FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS',
    FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE'
;

function requestProducts() {
    return ({
        type: FETCH_GALLERY_REQUEST,
    });
}

function fetchProductsSuccess(products) {
    return ({
        type: FETCH_GALLERY_SUCCESS,
        products,
    });
}

function fetchProductsFailure() {
    return ({
        type: FETCH_GALLERY_FAILURE,
    });
}

const fetchProducts = function () {
    return function (dispatch) {
        dispatch(requestProducts());

        return getFavoriteProducts()
            .then((products) => {
                dispatch(fetchProductsSuccess(products));
            })
            .catch((errors) => {
                dispatch(fetchProductsFailure(errors));
            })
        ;
    };
}

export {
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_FAILURE,
    fetchProducts,
};
