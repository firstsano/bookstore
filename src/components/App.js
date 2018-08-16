import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';
import { Router } from 'react-router-dom';

import Layout from '~/src/components/Layout';
import CartContainer from '~/src/containers/CartContext';
import Header from '~/src/components/Header/Header';
import ModalSwitch from '~/src/helpers/routes/ModalSwitch';
import history from '~/src/helpers/History';


const styles = () => ({
    divider: {
        margin: '20px 0'
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <CssBaseline>
                <CartContainer>
                    <Layout>
                        <Router history={history}>
                            <Fragment>
                                <Header title="Pragmatic Book Store" />
                                <Divider className={classes.divider} />
                                <ModalSwitch />
                            </Fragment>
                        </Router>
                    </Layout>
                </CartContainer>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);