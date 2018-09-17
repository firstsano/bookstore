import { connect } from 'react-redux';

import Catalog from './Catalog';


const mapStateToProps = ({catalog}) => {
    return {
        isFetched: catalog.isFetched,
        isLoading: catalog.isLoading,
        products: catalog.filteredProducts,
    };
};

export default connect(mapStateToProps)(Catalog);
