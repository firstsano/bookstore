import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';


const styles = (theme) => ({
    root: {
        width: 100,
        height: 100,
        padding: 5,
        display: 'inline-block',
        cursor: 'pointer',
    },
    active: {
        padding: 3,
        borderBottom: `solid 2px ${theme.palette.primary.main}`
    },
    card: {
        width: '100%',
        height: '100%',
    },
    media: {
        height: '100%',
    }
});

class Gallery extends Component {
    static get defaultProps() {
        return {
            images: []
        };
    }

    constructor(props) {
        super(props);
        this.state = { selectedImage: null }
    }

    handleClick(e) {
        const selectedImage = e.currentTarget.dataset.image;
        this.setState({ selectedImage });
        this.props.onImageSelect(selectedImage);
    }

    render() {
        const { selectedImage } = this.state;
        const { classes, images } = this.props;
        const imageCards = images.map((imageUrl) => {
            const isSelected = (imageUrl == selectedImage);

            return (
                <div
                    key={imageUrl}
                    className={`${classes.root} ${isSelected ? classes.active : '' }`}
                    onClick={(e) => this.handleClick(e)}
                    data-image={imageUrl}
                >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={imageUrl}
                        />
                    </Card>
                </div>
            );
        });

        return <Fragment> {imageCards} </Fragment>;
    }
}

export default withStyles(styles)(Gallery);