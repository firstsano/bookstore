import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper
} from '@material-ui/core';

import { productType } from '~/src/helpers/types';
import Description from '~/src/components/Product/Description';
import Image from '~/src/components/Image';


const styles = {
    root: {
        padding: '20px'
    },
    mainImage: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        display: 'block'
    },
    description: {
        flexGrow: 1
    }
};

class ProductPage extends Component {
    static get propTypes() {
        return {
            product: productType.isRequired
        };
    }

    render() {
        const { classes, product } = this.props;
        const { title, imageUrl } = product;

        return (
            <Paper className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={8}>
                        <Paper>
                            <Image
                                className={classes.mainImage}
                                src={imageUrl}
                                alt={title}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.description}>
                        <Description product={product} />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(ProductPage);