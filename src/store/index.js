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

const store = createStore(
    combineReducers(reducers),
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

store.dispatch(initializeCart());

export default store;