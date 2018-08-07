import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import products from '~/src/constants/Products';
import Catalog from '~/src/components/Catalog';
import AutoSnack from '~/src/components/AutoSnack';


class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products };
    }

    render() {
        const { location } = this.props;

        return (
            <Fragment>
                <Catalog products={this.state.products} />
                {location.state && location.state.withMessage &&
                    <AutoSnack
                        duration={3000}
                        message={location.state.withMessage}
                    />
                }
            </Fragment>
        )
    }
}

export default withRouter(CatalogPage);