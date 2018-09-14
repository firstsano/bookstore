import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import {
    validateEmail,
    validateRequired,
    validatePhone
} from '~/src/helpers/validators';
import OrderForm from './Form';
import { sendOrder } from '~/src/actions/order';
import { clearCart } from '~/src/actions/cart';


const validate = (values) => {
    const errors = Object.assign({},
        // validateEmail(values, ['email']),
        // validatePhone(values, ['phone']),
        validateRequired(values, ['username', 'email', 'phone', 'address']),
    );

    return errors;
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit(values) {
        dispatch(sendOrder(values)).then(() => {
            dispatch(reset('order'));
            dispatch(clearCart());
        });
    }
});

export default connect(null, mapDispatchToProps)(
    reduxForm({
        form: 'order',
        destroyOnUnmount: true,
        validate
    })(OrderForm)
);
