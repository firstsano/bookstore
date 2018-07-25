import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Grid,
    Divider,
} from '@material-ui/core';

import products from './constants/Products';
import Header from './Header';
import { Provider } from './CartContext';

const styles = theme => ({
    container: {
        maxWidth: '1170px',
        margin: 'auto'
    },
    divider: {
        margin: '20px 0'
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { cart: [] };
    }

    render() {
        const { title, classes } = this.props;
        return (
            <CssBaseline>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Provider value={this.state.cart}>
                            <Header title="Pragmatic Book Store" />
                            <Divider className={classes.divider} />
                            <div> {this.props.children} </div>
                        </Provider>
                    </Grid>                    
                </Grid>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
