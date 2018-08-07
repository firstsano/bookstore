import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography
 } from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';


const styles = {
    container: {
        height: '80vh'
    },
    label: {
        display: 'inline-box',
        margin: 'auto',
        textAlign: 'center',
        color: pink["A100"]
    }
}

class NotFound extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.container}>
                <Typography component="div" variant="display4" className={classes.label}>
                    404
                </Typography>
            </Grid>
        );
    }
}

export default withStyles(styles)(NotFound);