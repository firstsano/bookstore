import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';

import Layout from '~/src/components/Layout';
import CartContainer from '~/src/containers/CartContext';
import Header from '~/src/components/Header';
import CatalogPage from '~/src/containers/CatalogPage';


const styles = () => ({
    divider: {
        margin: '20px 0'
    }
});

class App extends Component {
    render() {
        const { children, classes } = this.props;
        return (
            <CssBaseline>
                <Layout>
                    <CartContainer>
                        <Header title="Pragmatic Book Store" />
                        <Divider className={classes.divider} />
                        <CatalogPage />
                    </CartContainer>
                </Layout>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
