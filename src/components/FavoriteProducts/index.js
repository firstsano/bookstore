import { connect } from 'react-redux';

import FavoriteProducts from './FavoriteProducts';


const mapStateToProps = ({gallery}) => {
    return {
        isLoading: gallery.isLoading,
        isFetched: gallery.isFetched,
        products: gallery.products,
    };
};

export default connect(mapStateToProps)(FavoriteProducts);
