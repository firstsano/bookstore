import { propsToPayload } from '~/src/helpers/contentful';
import { MANAGEMENT_HEADERS, MANAGEMENT_URL } from '~/src/helpers/contentful/settings';
import { API_CALL } from '~/src/middleware/API';


export const
    SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST',
    SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS',
    SEND_ORDER_FAILURE = 'SEND_ORDER_FAILURE',
    VALIDATE_ORDER_REQUEST = 'VALIDATE_ORDER_REQUEST',
    VALIDATE_ORDER_SUCCESS = 'VALIDATE_ORDER_SUCCESS',
    VALIDATE_ORDER_FAILURE = 'VALIDATE_ORDER_FAILURE',
    DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST',
    DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS',
    DELETE_ORDER_FAILURE = 'DELETE_ORDER_FAILURE'
;

export const sendOrder = (order) => ({
    [API_CALL]: {
        root: MANAGEMENT_URL,
        endpoint: '/entries',
        headers: Object.assign({}, MANAGEMENT_HEADERS, {
            'Content-type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': 'order'
        }),
        method: 'POST',
        payload: propsToPayload(order),
        types: [
            SEND_ORDER_REQUEST,
            SEND_ORDER_SUCCESS,
            SEND_ORDER_FAILURE
        ]
    }
});

export const deleteOrder = (id, version) => ({
    [API_CALL]: {
        root: MANAGEMENT_URL,
        endpoint: `/entries/${id}`,
        headers: Object.assign({}, MANAGEMENT_HEADERS, {
            'X-Contentful-Version': version,
            'X-Contentful-Content-Type': 'order'
        }),
        method: 'DELETE',
        types: [
            DELETE_ORDER_REQUEST,
            DELETE_ORDER_SUCCESS,
            DELETE_ORDER_FAILURE
        ]
    }
});

export const validateOrder = (id, version = 1) => ({
    [API_CALL]: {
        root: MANAGEMENT_URL,
        endpoint: `/entries/${id}/published`,
        headers: Object.assign({}, MANAGEMENT_HEADERS, {
            'X-Contentful-Version': version,
            'X-Contentful-Content-Type': 'order'
        }),
        method: 'PUT',
        types: [
            SEND_ORDER_REQUEST,
            SEND_ORDER_SUCCESS,
            SEND_ORDER_FAILURE
        ]
    }
});
