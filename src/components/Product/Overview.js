import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createPortal } from 'react-dom';
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
        const { product: { images } } = props;
        this.state = {
            images,
            isExpanded: false,
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

    toggleGallery() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    nextImage(step = 1) {
        const { images, selectedImage } = this.state;
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
                            image={selectedImage}
                            title={title}
                            onClickNext={(e) => this.nextImage(1)}
                            onClickPrev={(e) => this.nextImage(-1)}
                            onClickExpand={(e) => this.toggleGallery()}
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
                {
                    isExpanded &&
                    <Modal
                        className={classes.modal}
                        onLayoutClick={(e) => this.toggleGallery()}
                    >
                        <div className={classes.modalGallery}>
                            <MainImage
                                image={selectedImage}
                                title={title}
                                onClickNext={(e) => this.nextImage(1)}
                                onClickPrev={(e) => this.nextImage(-1)}
                            />
                        </div>
                        <div className={classes.modalMiniatures}>
                            <Miniatures
                                images={product.images}
                                selectedImage={selectedImage}
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
