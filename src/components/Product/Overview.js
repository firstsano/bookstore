import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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

class Overview extends Component {
    static get propTypes() {
        return {
            product: productType.isRequired
        };
    }

    constructor(props) {
        super(props);
        this.state = { selectedImage: props.product.mainImage };
    }

    handleImageSelect(image) {
        this.setState({ selectedImage: image });
    }

    render() {
        const { classes, product } = this.props;
        const { title } = product;
        const { selectedImage } = this.state;

        return (
            <Paper className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={8}>
                        <Paper>
                            <Image
                                className={classes.mainImage}
                                src={selectedImage}
                                alt={title}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.description}>
                        <Description
                            product={product}
                            onImageSelect={(image) => {this.handleImageSelect(image)}}
                        />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(Overview);
