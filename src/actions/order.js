import { propsToPayload } from '~/src/helpers/contentful';
import { MANAGEMENT_HEADERS, MANAGEMENT_URL } from '~/src/helpers/contentful/settings';
import { API_CALL } from '~/src/middleware/API';


export const
    SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST',
    SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS',
    SEND_ORDER_FAILURE = 'SEND_ORDER_FAILURE'
;

export const sendOrder = (order) => ({
    [API_CALL]: {
        root: MANAGEMENT_URL,
        endpoint: '/entries',
        headers: Object.assign({}, MANAGEMENT_HEADERS, {
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

export const sendOrderRequest = () => ({
    type: SEND_ORDER_REQUEST
});

export const sendOrderSuccess = (response) => ({
    type: SEND_ORDER_SUCCESS,
    response
});

export const sendOrderFailure = () => ({
    type: SEND_ORDER_FAILURE,
});
