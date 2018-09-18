import { isUndefined } from 'lodash';


export default (store, state) => {
    const { query, params, routes } = state;
    const prepareDataFns = routes.map(route => route.prepareData).filter(fn => !isUndefined(fn));
    return Promise.all(prepareDataFns.map(fn => fn(store, query, params, routes)));
}