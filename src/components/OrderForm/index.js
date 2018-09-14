import { reset, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { get } from 'lodash';

import {
    validateEmail,
    validateRequired,
    validatePhone
} from '~/src/helpers/validators';
import OrderForm from './Form';
import {
    sendOrder,
    validateOrder,
    deleteOrder
} from '~/src/actions/order';
import { clearCart } from '~/src/actions/cart';
import { errorsToReduxErrors } from '~/src/helpers/contentful';


// validate address by server side
const validate = (values) => {
    const errors = Object.assign({},
        validateEmail(values, ['email']),
        validatePhone(values, ['phone']),
        validateRequired(values, ['username', 'email', 'phone']),
    );

    return errors;
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit(values) {
        return dispatch(sendOrder(values)).then((data) => {
            const { id, version } = data.body.sys;
            return dispatch(validateOrder(id, version))
                .then(() => {
                    dispatch(reset('order'));
                    dispatch(clearCart());
                })
                .catch((error) => {
                    const errors = get(error, 'response.body.details.errors', false);
                    dispatch(deleteOrder(id, version));
                    if (errors) {
                        throw new SubmissionError(errorsToReduxErrors(errors));
                    }
                })
            ;
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
