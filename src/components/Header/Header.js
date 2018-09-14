import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';
import SearchInput from './SearchInput';

import CartButton from '~/src/components/CartButton';
import Menu from './Menu';


const styles = theme => ({
    toolbar: {
        'flex-direction': 'row-reverse'
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { search: null };
    }

    handleSearchChange(e) {
        const value = e.target.value;
        this.setState({search: value});
        this.props.search(value);
    }

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
                    <Grid item xs={2}>
                        <Toolbar>
                            <SearchInput
                                value={this.state.search}
                                onChange={(e) => this.handleSearchChange(e)}
                            />
                        </Toolbar>
                    </Grid>
                    <Grid item xs={2}>
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
