import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import catalog from './catalog';
import gallery from './gallery';


export default {
    cart,
    catalog,
    gallery,
    form: formReducer
}