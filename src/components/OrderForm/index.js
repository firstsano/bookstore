import { reduxForm } from 'redux-form';

import {
    validateEmail,
    validateRequired,
    validatePhone
} from '~/src/helpers/validators';
import OrderForm from './Form';


const validate = (values) => {
    const errors = Object.assign({},
        validateEmail(values, ['email']),
        validatePhone(values, ['phone']),
        validateRequired(values, ['username', 'email', 'phone', 'address']),
    );

    return errors;
};

export default reduxForm({
    form: 'order',
    destroyOnUnmount: true,
    validate
})(OrderForm);
