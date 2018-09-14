import { connect } from 'react-redux';

import Header from './Header';
import { searchProducts, setFilter } from '~/src/actions/catalog';


const mapDispatchToProps = (dispatch) => {
    return ({
        search(value) {
            return dispatch(searchProducts(value))
                .then((response) => {
                    const filteredIds = response.body.items.map(item => item.fields.id);
                    dispatch(setFilter(filteredIds));
                })
            ;
        }
    });
};

export default connect(null, mapDispatchToProps)(Header);
