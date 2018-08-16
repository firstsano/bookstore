import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import {
    includes,
    first,
    findIndex,
    size,
    find
} from 'lodash';

import { productType } from '~/src/helpers/types';
import Description from '~/src/components/Product/Description';
import MainImage from '~/src/components/Gallery/MainImage';
import Miniatures from '~/src/components/Gallery/Miniatures';
import Modal from '~/src/components/Modal';


const styles = {
    root: {
        padding: '20px'
    },
    description: {
        flexGrow: 1
    },
    modal: {
        width: '80%',
        height: '80%'
    },
    mainImage: {
        height: 500
    },
    modalGallery: {
        width: '100%',
        height: '80%'
    },
    modalMiniatures: {
        width: '100%',
        height: '20%',
        marginTop: '10px',
        textAlign: 'center'
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
        this.state = {
            isExpanded: false,
            selectedImage: first(this.props.product.images)
        };
        this.selectImage = this.selectImage.bind(this);
    }

    get imageUrls() {
        return this.props.product.images.map(image => image.url);
    }

    selectImage(imageUrl) {
        const { images } = this.props.product;
        let { selectedImage } = this.state;
        if (selectedImage.url == imageUrl || !includes(this.imageUrls, imageUrl)) {
            return false;
        }
        selectedImage = find(images, (image) => (image.url == imageUrl));
        this.setState({ selectedImage });
    }

    toggleGallery() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    nextImage(step = 1) {
        const { images } = this.props.product;
        const { selectedImage } = this.state;
        let index = findIndex(images, (image) => (image == selectedImage)) + step;
        if (index < 0) { index = size(images) - 1; }
        if (index >= size(images)) { index = 0; }
        this.setState({ selectedImage: images[index] })
    }

    render() {
        const { selectedImage, isExpanded } = this.state;
        const { classes, product } = this.props;
        const { title } = product;

        return (
            <Paper className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={8} className={classes.mainImage}>
                        <MainImage
                            image={selectedImage.url}
                            title={title}
                            source={selectedImage.id}
                            onClickNext={(e) => this.nextImage(1)}
                            onClickPrev={(e) => this.nextImage(-1)}
                            onClickExpand={(e) => this.toggleGallery()}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.description}>
                        <Description
                            product={product}
                            selectedImage={selectedImage.url}
                            images={this.imageUrls}
                            onImageSelect={this.selectImage}
                        />
                    </Grid>
                </Grid>
                {
                    isExpanded &&
                    <Modal
                        className={classes.modal}
                        onLayoutClick={(e) => this.toggleGallery()}
                    >
                        <div className={classes.modalGallery}>
                            <MainImage
                                image={selectedImage.url}
                                title={title}
                                onClickNext={(e) => this.nextImage(1)}
                                onClickPrev={(e) => this.nextImage(-1)}
                            />
                        </div>
                        <div className={classes.modalMiniatures}>
                            <Miniatures
                                selectedImage={selectedImage.url}
                                images={this.imageUrls}
                                onImageSelect={this.selectImage}
                            />
                        </div>
                    </Modal>
                }
            </Paper>
        );
    }
}

export default withStyles(styles)(Overview);
