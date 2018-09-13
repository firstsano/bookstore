import { get } from 'lodash';

import { saveState } from '~/src/helpers/persistance';


export const LOCAL_STORAGE = 'LOCAL_STORAGE';

export default store => next => action => {
    if (!action[LOCAL_STORAGE]) {
        next(action);
        return;
    }

    next(action);

    const { source } = action[LOCAL_STORAGE];
    const state = get(store.getState(), source, {});
    saveState(source, state);
}