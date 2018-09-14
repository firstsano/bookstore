import * as contentful from '~/src/helpers/contentful';


export const CONTENTFUL_CALL = 'CONTENTFUL_CALL';

export default store => next => action => {
    if (!action[CONTENTFUL_CALL]) {
        const response = next(action);
        return response;
    }

    const {
        types: [requestType, successType, failureType],
        method,
        params
    } = action[CONTENTFUL_CALL];

    const nextAction = (action, data) => (
        Object.assign({}, action, data, {
            [CONTENTFUL_CALL]: undefined
        })
    );

    store.dispatch(nextAction(action, {type: requestType}));

    const promise = contentful[method].apply(null, params);
    promise
        .then((response) => {
            store.dispatch(nextAction(action, { type: successType, response }));
        })
        .catch((error) => {
            store.dispatch(nextAction(action, { type: failureType, error }));
        })
    ;

    return promise;
}