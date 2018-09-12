import { CONTENTFUL_CALL } from '~/src/middleware/contentful';


export const
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
;

export const fetchProducts = () => ({
    [CONTENTFUL_CALL]: {
        method: 'getProducts',
        types: [
            FETCH_PRODUCTS_REQUEST,
            FETCH_PRODUCTS_SUCCESS,
            FETCH_PRODUCTS_FAILURE
        ]
    }
});

export const fetchProduct = (productId) => ({
    [CONTENTFUL_CALL]: {
        method: 'getProduct',
        params: [productId],
        types: [
            FETCH_PRODUCTS_REQUEST,
            FETCH_PRODUCTS_SUCCESS,
            FETCH_PRODUCTS_FAILURE
        ]
    }
});

export const requestProducts = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (response) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    response
});

export const fetchProductsFailure = () => ({
    type: FETCH_PRODUCTS_FAILURE,
});
