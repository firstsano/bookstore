import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import middlewares from '~/src/middleware';
import reducers from '~/src/reducers';
import { initializeCart } from '~/src/actions/cart';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

if (__SERVER__) {
    store = createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(...middlewares)
        )
    );
} else {
    store = createStore(
        combineReducers(reducers),
        window.__INITIAL_STATE__,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );
    delete window.__INITIAL_STATE__;
}

store.dispatch(initializeCart());

export default store;