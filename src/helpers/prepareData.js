import { matchPath } from 'react-router-dom';
import { parse } from 'qs';
import { isUndefined } from 'lodash';

import routes from '~/src/helpers/routes';
import store from '~/src/store';


export const historyCb = (location) => {
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

    prepareData(state);
};

export const prepareData = (state) => {
    const { query, params, routes } = state;
    const prepareDataFns = routes.map(route => route.prepareData).filter(fn => !isUndefined(fn));
    return Promise.all(prepareDataFns.map(fn => fn(store, query, params, routes)));
}