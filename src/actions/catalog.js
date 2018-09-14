import { CONTENTFUL_CALL } from '~/src/middleware/contentful';
import { API_CALL } from '~/src/middleware/API';
import { ACCESS_HEADERS, ACCESS_URL } from '~/src/helpers/contentful/settings';


export const
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
    SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST',
    SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS',
    SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE',
    SET_FILTER = 'SET_FILTER'
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

export const searchProducts = (search) => ({
    [API_CALL]: {
        root: ACCESS_URL,
        endpoint: '/entries',
        headers: ACCESS_HEADERS,
        method: 'GET',
        query: {
            content_type: 'product',
            "fields.title[match]": search
        },
        types: [
            SEARCH_PRODUCTS_REQUEST,
            SEARCH_PRODUCTS_SUCCESS,
            SEARCH_PRODUCTS_FAILURE,
        ]
    }
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});
