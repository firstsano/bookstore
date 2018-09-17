import { matchPath } from 'react-router-dom';
import { parse } from 'qs';
import { isUndefined } from 'lodash';

import routes from '~/src/helpers/routes';


export const historyCb = (location, action) => {
    const state = {
        routes: [],
        params: {},
        query: {}
    };

    for (let route of routes) {
        const match = matchPath(location.pathname, route);
        if (match) {
            state.routes.push(route);
            Object.assign(state.params, match.params);
            Object.assign(state.query, parse(location.search.substr(1)));
        }
    }

    prepareData(store, state);
};

export const prepareData = (store, state) => {
    const { query, params, routes } = state;
    const prepareDataFns = routes.map(route => route.prepareData).filter(fn => !isUndefined(fn));
    return Promise.all(prepareDataFns.map(fn => fn(store, query, params, routes)));
}