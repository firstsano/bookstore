import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Helmet } from "react-helmet";


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
            <Fragment>
                <Helmet>
                    <title> Книжный магазин </title>
                </Helmet>

                <Grid container className={classes.container}>
                    <Grid item xs={12}> {children} </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Layout);
