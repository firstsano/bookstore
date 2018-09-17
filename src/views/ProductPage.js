import React, { Component } from 'react';
import { first } from 'lodash';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Overview from '~/src/components/Product/Overview';
import { notFoundPath } from '~/src/helpers/routes/NotFoundRoute';


class ProductPage extends Component {
    render() {
        const { isFetched, isLoading, product } = this.props;
        if (!isFetched || isLoading) {
            return 'Загрузка...';
        }
        if (isFetched && !product) {
            return <Redirect to={{ pathname: notFoundPath() }}/>
        }
        return <Overview product={product} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.catalog.isLoading,
        isFetched: state.catalog.isFetched,
        product: first(state.catalog.products),
    };
};

export default connect(mapStateToProps)(ProductPage);
