import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import middlewares from '~/src/middleware';
import reducers from '~/src/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(reducers),
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

export default store;