import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '~/src/components/Layout';
import Header from '~/src/components/Header/Header';
import ModalSwitch from '~/src/helpers/routes/ModalSwitch';
import history from '~/src/helpers/History';
import store from '~/src/store';


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
                <Layout>
                    <Router history={history}>
                        <Provider store={store}>
                            <Fragment>
                                <Header title="Pragmatic Book Store" />
                                <Divider className={classes.divider} />
                                <ModalSwitch />
                            </Fragment>
                        </Provider>
                    </Router>
                </Layout>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);