import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import middlewares from '~/src/middleware';
import reducers from '~/src/reducers';


let store;

if (__SERVER__) {
    store = createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(...middlewares)
        )
    );
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(
        combineReducers(reducers),
        window.__INITIAL_STATE__,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );
    delete window.__INITIAL_STATE__;
}

export default store;