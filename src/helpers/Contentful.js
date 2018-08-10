import request from 'superagent';
import { camelizeKeys } from 'humps';
import {
    set,
    get,
    flattenDeep
} from 'lodash';

import SETTINGS from '~/src/constants/Settings';


const SERVER = 'https://cdn.contentful.com';

const {
    ACCESS_TOKEN,
    SPACE,
    ENVIRONMENT
} = SETTINGS;

const AUTH_HEADERS = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`
};

const PATHES = {
    ID: 'sys.id',
    ITEMS: 'body.items',
    PRODUCT_IMAGES: 'fields.images',
    ASSET_ID: 'body.sys.id',
    ASSET_URL: 'body.fields.file.url'
};

const productsRequest = function() {
    const query = { content_type: 'product' },
          url = `${SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}/entries`
    ;
    return request
            .get(url)
            .set(AUTH_HEADERS)
            .query(query)
    ;
};

const assetRequest = function(asset) {
    const url = `${SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}/assets/${asset}`;
    return request
            .get(url)
            .set(AUTH_HEADERS)
    ;
}

export const getProducts = async function() {
    const response = await productsRequest();
    const productItems = get(camelizeKeys(response), PATHES.ITEMS, []);
    const allAssets = productItems.map(item => get(item, PATHES.PRODUCT_IMAGES, []));
    const assetsIds = flattenDeep(allAssets).map(asset => get(asset, PATHES.ID));
    const assetsResponse = await Promise.all(assetsIds.map(id => assetRequest(id)));
    const assetsInfo = camelizeKeys(assetsResponse);
    const assets = Object.assign({},
        ...assetsInfo.map(info => ({
            [get(info, PATHES.ASSET_ID)]: get(info, PATHES.ASSET_URL)
        }))
    );
    for (let item of productItems) {
        const productAssets = get(item, PATHES.PRODUCT_IMAGES, []).map(asset => get(asset, PATHES.ID));
        const productImages = productAssets.map(id => assets[id]);
        set(item, PATHES.PRODUCT_IMAGES, productImages);
    }
    return productItems;
};