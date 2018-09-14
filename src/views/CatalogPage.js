import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';

import Catalog from '~/src/components/Catalog';
import FavoriteProducts from '~/src/components/FavoriteProducts';
import AutoSnack from '~/src/components/AutoSnack';


const styles = {
    paper: {
        padding: 10
    },
    divider: {
        margin: '20px 0'
    }
}

class CatalogPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location, classes } = this.props;

        return (
            <Fragment>
                <Paper className={classes.paper}>
                    <FavoriteProducts />
                </Paper>
                <Divider className={classes.divider} />
                <Paper className={classes.paper}>
                    <Catalog />
                </Paper>
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

const CatalogPageWithStyles = withStyles(styles)(CatalogPage);
const CatalogPageWithRouter = withRouter(CatalogPageWithStyles);
export default CatalogPageWithRouter;
