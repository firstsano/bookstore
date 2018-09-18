import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './Button';
import { addToCart } from '~/src/actions/cart';
import { initializeCart } from '~/src/actions/cart';


const mapStateToProps = ({cart: {products}}) => ({products});

const mapDispatchToProps = (dispatch) => {
    return ({
        addProductToCart(product) {
            dispatch(addToCart(product));
        },
        initializeProductCart() {
            dispatch(initializeCart());
        },
    });
};

const ButtonWithRouter = withRouter(Button);
export default connect(mapStateToProps, mapDispatchToProps)(ButtonWithRouter);
