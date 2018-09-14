import { connect } from 'react-redux';

import { fetchGallery } from '~/src/actions/gallery';
import FavoriteProducts from './FavoriteProducts';


const mapStateToProps = ({gallery}) => {
    return {
        isLoading: gallery.isLoading,
        isFetched: gallery.isFetched,
        products: gallery.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loadGallery() {
            return dispatch(fetchGallery());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProducts);
