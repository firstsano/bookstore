import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swipeable from 'react-swipeable';
import {
    Paper,
    Button,
    Icon,
    Card,
    CardMedia
} from '@material-ui/core';


const styles = {
    root: {
        position: 'relative',
        height: '100%'
    },
    card: {
        width: '100%',
        height: '100%',
        padding: 5
    },
    media: {
        height: '100%',
    },
    swiper: {
        height: '100%'
    },
    button: {
        opacity: 0.9,
        position: 'absolute',
        top: '50%',
        marginTop: -25
    },
    buttonLeft: {
        left: 10,
    },
    buttonRight: {
        right: 10
    },
    buttonCenter: {
        top: 'initial',
        bottom: 10,
        left: '50%',
        marginTop: -25
    }
};

class MainImage extends Component {    
    render() {
        const {
            classes, image, title,
            onClickNext, onClickPrev, onClickExpand
        } = this.props;

        return (
            <Paper className={classes.root}>
                <Swipeable
                    onSwipedRight={(e) => onClickPrev(e)}
                    onSwipedLeft={(e) => onClickNext(e)}
                    className={classes.swiper}
                >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title={title}
                        />
                    </Card>
                </Swipeable>
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonRight].join(' ')}
                    onClick={(e) => onClickNext(e)}
                >
                    <Icon>navigate_next_icon</Icon>
                </Button>
                {
                    onClickExpand &&
                    <Button
                        mini
                        variant="contained"
                        color="primary"
                        className={[classes.button, classes.buttonCenter].join(' ')}
                        onClick={(e) => onClickExpand(e)}
                    >
                        <Icon>zoom_out_map_icon</Icon>
                    </Button>
                }
                <Button
                    mini
                    variant="fab"
                    color="primary"
                    className={[classes.button, classes.buttonLeft].join(' ')}
                    onClick={(e) => onClickPrev(e)}
                >
                    <Icon>navigate_before_icon</Icon>
                </Button>
            </Paper>
        );
    }
}

export default withStyles(styles)(MainImage);
