import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardHeader
} from '@material-ui/core';

import { productPath } from '~/src/helpers/routes/ProductRoute';


const styles = {
    root: {
        position: 'relative',
        height: 300
    },
    header: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        left: 0,
        bottom: 0,
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    media: {
        height: '100%',
        backgroundPosition: 'top center'
    }
};

class SimpleProductCard extends Component {
    render() {
        const { product: { id, title, mainImage }, classes } = this.props;

        return (
            <Card className={classes.root}>
                <CardHeader
                    title={
                        <NavLink to={productPath(id)} className={classes.link} >
                            {title}
                        </NavLink>
                    }
                    className={classes.header}
                />
                <CardMedia
                    className={classes.media}
                    image={mainImage}
                    title={title}
                />
            </Card>
        );
    }
}

export default withStyles(styles)(SimpleProductCard);