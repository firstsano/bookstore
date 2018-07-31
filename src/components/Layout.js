import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const styles = () => ({
    container: {
        maxWidth: '1170px',
        margin: 'auto'
    }
});

class Layout extends Component {
    render() {
        const { classes, children } = this.props;
        return (
            <Grid container className={classes.container}>
                <Grid item xs={12}> {children} </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Layout);
