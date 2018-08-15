import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import {
    includes,
    first,
    findIndex,
    size
} from 'lodash';

import { productType } from '~/src/helpers/types';
import Description from '~/src/components/Product/Description';
import MainImage from '~/src/components/Gallery/MainImage';


const styles = {
    root: {
        padding: '20px'
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
        const { product: { images } } = props;
        this.state = {
            images,
            selectedImage: first(images)
        };
        this.selectImage = this.selectImage.bind(this);
    }

    selectImage(image) {
        const { images, selectedImage } = this.state;
        if (selectedImage == image || !includes(images, image)) {
            return false;
        }
        this.setState({ selectedImage: image });
    }

    nextImage(step = 1) {
        const { images, selectedImage } = this.state;
        let index = findIndex(images, (image) => (image == selectedImage)) + step;
        if (index < 0) { index = size(images) - 1; }
        if (index >= size(images)) { index = 0; }
        this.setState({ selectedImage: images[index] })
    }

    render() {
        const { selectedImage } = this.state;
        const { classes, product } = this.props;
        const { title } = product;

        return (
            <Paper className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={8}>
                        <MainImage
                            image={selectedImage}
                            title={title}
                            onClickNext={(e) => this.nextImage(1)}
                            onClickPrev={(e) => this.nextImage(-1)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.description}>
                        <Description
                            product={product}
                            selectedImage={selectedImage}
                            onImageSelect={this.selectImage}
                        />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(Overview);
