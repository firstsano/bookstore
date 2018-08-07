import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';

import Image from '~/src/components/Image';
import TextBox from '~/src/components/TextBox';


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