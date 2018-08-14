import request from 'superagent';
import { camelizeKeys } from 'humps';
import {
    set,
    get,
    first,
    flattenDeep
} from 'lodash';

import SETTINGS from '~/src/constants/Settings';


const SERVER = 'https://cdn.contentful.com';

const {
    ACCESS_TOKEN,
    SPACE,
    ENVIRONMENT,
    PRODUCT_ATTRIBUTES
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

const productsRequest = function(productId) {
    const url = `${SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}/entries`;
    let query = { content_type: 'product' };
    if (productId) {
        query["fields.id[equals]"] = productId;
    }
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

const productsFromResponse = function(response, assets) {
    const products = [];
    for (let item of response) {
        const product = { images: [] };
        PRODUCT_ATTRIBUTES.forEach((attribute) => {
            product[attribute] = get(item, `fields.${attribute}`);
        })
        get(item, 'fields.images', []).forEach((image) => {
            const imageId = get(image, PATHES.ID);
            product.images.push(assets[imageId]);
        });
        product.mainImage = first(product.images);
        products.push(product);
    }
    return products;
}

const getAssetsIdsFromResponse = function(response) {
    const allAssets = response.map(item => get(item, PATHES.PRODUCT_IMAGES, []));
    return flattenDeep(allAssets).map(asset => get(asset, PATHES.ID));
};

const loadAssets = async function(ids) {
    const assetsResponse = await Promise.all(ids.map(id => assetRequest(id)));
    const assetsInfo = camelizeKeys(assetsResponse);
    return Object.assign({},
        ...assetsInfo.map(info => ({
            [get(info, PATHES.ASSET_ID)]: get(info, PATHES.ASSET_URL)
        }))
    );
};

const setupProductImages = function (products, assets) {
    for (let product of products) {
        const productAssets = get(product, PATHES.PRODUCT_IMAGES, []).map(asset => get(asset, PATHES.ID));
        const productImages = productAssets.map(id => assets[id]);
        set(product, PATHES.PRODUCT_IMAGES, productImages);
    }
}

export const getProducts = async function(id) {
    const response = await productsRequest(id);
    const productItems = get(camelizeKeys(response), PATHES.ITEMS, []);
    const assetsIds = getAssetsIdsFromResponse(productItems)
    const assets = await loadAssets(assetsIds);
    return productsFromResponse(productItems, assets);
};