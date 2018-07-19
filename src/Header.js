import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
