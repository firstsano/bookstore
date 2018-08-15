import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swipeable from 'react-swipeable';
import {
    Paper,
    Button,
    Icon
} from '@material-ui/core';

import Image from '~/src/components/Image';


const styles = {
    root: {
        position: 'relative'
    },
    mainImage: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        display: 'block'
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
    }
};

class MainImage extends Component {    
    render() {
        const {
            classes, image, title,
            onClickNext, onClickPrev
        } = this.props;

        return (
            <Paper className={classes.root}>
                <Swipeable
                    onSwipedRight={(e) => onClickPrev(e)}
                    onSwipedLeft={(e) => onClickNext(e)}
                >
                    <Image
                        className={classes.mainImage}
                        src={image}
                        alt={title}
                    />
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
