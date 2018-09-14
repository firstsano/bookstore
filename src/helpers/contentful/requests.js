import request from 'superagent';

import {
    ACCESS_URL,
    ACCESS_HEADERS as AUTH_HEADERS,
} from './settings';


const
    ASSETS_URL = `${ACCESS_URL}/assets`,
    ENTRIES_URL = `${ACCESS_URL}/entries`
;

export const productsRequest = function() {
    return request
            .get(ENTRIES_URL)
            .set(AUTH_HEADERS)
            .query({ content_type: 'product' })
    ;
};

export const productRequest = function(id) {
    return request
            .get(ENTRIES_URL)
            .set(AUTH_HEADERS)
            .query({
                content_type: 'product',
                "fields.id[equals]": id
            })
    ;
};

export const favoriteProductRequest = function() {
    return request
            .get(ENTRIES_URL)
            .set(AUTH_HEADERS)
            .query({
                content_type: 'product',
                "fields.is_favorite[equals]": true
            })
    ;
};

export const assetRequest = function(asset) {
    return request
            .get(`${ASSETS_URL}/${asset}`)
            .set(AUTH_HEADERS)
    ;
}

export const assetsRequest = function(assets=[]) {
    return request
            .get(ASSETS_URL)
            .set(AUTH_HEADERS)
            .query({ 'sys.id[in]': assets.join(',') })
    ;
}