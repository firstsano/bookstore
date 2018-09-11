import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';

import CartButton from '~/src/components/Cart/Button';
import Menu from './Menu';


const styles = {
    toolbar: {
        'flex-direction': 'row-reverse'
    }
};

class Header extends Component {
    render() {
        const { classes, title } = this.props;

        return (
            <AppBar position="static">
                <Grid container>
                    <Grid item xs={8}>
                        <Toolbar>
                            <Menu />
                            <Typography variant="title" color="inherit"> {title} </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={4}>
                        <Toolbar className={classes.toolbar}>
                            <CartButton />
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);
