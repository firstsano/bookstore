import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';

import Layout from '~/src/components/Layout';
import CartContainer from '~/src/containers/CartContext';
import Header from '~/src/components/Header/Header';
import {
    Router,
    Switch as AppBody
} from '~/src/helpers/Router';


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
                <Router>
                    <CartContainer>
                        <Layout>
                            <Header title="Pragmatic Book Store" />
                            <Divider className={classes.divider} />
                            <AppBody />
                        </Layout>
                    </CartContainer>
                </Router>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
