import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';

import Image from './Image';
import TextBox from './TextBox';


const styles = {
    root: {
        whiteSpace: 'normal'
    }
};

class ProductChip extends Component {
    render() {
        const { classes, product } = this.props;
        return (
            <Chip
                avatar={<Avatar> <Image src={product.imageUrl} height='50px' /> </Avatar>}
                label={<TextBox> {product.title} </TextBox>}
                classes={{label: classes.root}}
            />
        );
    }
}

export default withStyles(styles)(ProductChip);