import { connect } from 'react-redux';

import Catalog from './Catalog';
import { fetchProducts } from '~/src/actions/catalog';


const mapStateToProps = ({catalog}) => {
    return {
        isFetched: catalog.isFetched,
        isLoading: catalog.isLoading,
        products: catalog.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loadProducts() {
            return dispatch(fetchProducts());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
