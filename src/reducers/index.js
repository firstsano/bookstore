import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import catalog from './catalog';
import gallery from './gallery';
import order from './order';


export default {
    cart,
    catalog,
    gallery,
    order,
    form: formReducer
}