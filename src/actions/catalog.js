import {
    getProduct,
    getProducts,
} from '~/src/helpers/contentful';


const
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
;

function requestProducts() {
    return ({
        type: FETCH_PRODUCTS_REQUEST,
    });
}

function fetchProductsSuccess(products) {
    return ({
        type: FETCH_PRODUCTS_SUCCESS,
        products
    });
}

function fetchProductsFailure() {
    return ({
        type: FETCH_PRODUCTS_FAILURE,
    });
}

const fetchProducts = function (productId) {
    return function (dispatch) {
        dispatch(requestProducts());

        const request = productId ? getProduct(productId) : getProducts();
        return request
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
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    fetchProducts,
};
