import request from 'superagent';

import SETTINGS from '~/src/constants/Settings';


const { ACCESS_TOKEN, SPACE, ENVIRONMENT } = SETTINGS;
const SERVER = 'https://cdn.contentful.com',
      AUTH_HEADERS = {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      BASE_URL = `${SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}`,
      ENTRIES_URL = `${BASE_URL}/entries`,
      ASSETS_URL = `${BASE_URL}/assets`
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