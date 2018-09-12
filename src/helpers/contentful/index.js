import { camelizeKeys } from 'humps';
import {
    get,
    first,
    uniq,
    flattenDeep
} from 'lodash';

import SETTINGS from '~/src/constants/Settings';
import {
    productsRequest,
    productRequest,
    favoriteProductRequest,
    assetRequest,
    assetsRequest
} from './requests';


const { PRODUCT_ATTRIBUTES } = SETTINGS;

const productsFromResponse = function(response, assets) {
    const products = [];
    for (let item of response) {
        const product = { images: [] };
        PRODUCT_ATTRIBUTES.forEach((attribute) => {
            product[attribute] = get(item, `fields.${attribute}`);
        })
        get(item, 'fields.images', []).forEach((image) => {
            const id = get(image, 'sys.id');
            product.images.push({
                id,
                url: assets[id]
            });
        });
        product.mainImage = first(product.images);
        products.push(product);
    }
    return products;
}

const getAssetsIdsFromResponse = function(response) {
    const allAssets = response.map(item => get(item, 'fields.images', []));
    return flattenDeep(allAssets).map(asset => get(asset, 'sys.id'));
};

const loadAssets = async function(ids) {
    let assetsResponse = await assetsRequest(ids);
    assetsResponse = camelizeKeys(assetsResponse);
    const assetsInfo = get(assetsResponse, 'body.items');
    return Object.assign({},
        ...assetsInfo.map(info => ({
            [get(info, 'sys.id')]: get(info, 'fields.file.url')
        }))
    );
};

const fetchProducts = async function(request) {
    const response = await request;
    const productItems = get(camelizeKeys(response), 'body.items', []);
    const assetsIds = uniq(getAssetsIdsFromResponse(productItems));
    const assets = await loadAssets(assetsIds);
    return productsFromResponse(productItems, assets);
}

export const getProducts = async function() {
    const request = productsRequest();
    return await fetchProducts(request);
};

export const getProduct = async function(id) {
    const request = productRequest(id);
    return await fetchProducts(request);
}

export const getFavoriteProducts = async function() {
    const request = favoriteProductRequest();
    return await fetchProducts(request);
}

export const getImage = async function(id) {
    const request = assetRequest(id);
    const imageResponse = await request;
    return get(imageResponse, 'body.fields.file.url');
}