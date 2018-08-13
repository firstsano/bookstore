import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';

import Image from '~/src/components/Image';
import { productPath } from '~/src/helpers/routes/ProductRoute';


const styles = {
    root: {
        whiteSpace: 'normal'
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
};

class ProductChip extends Component {
    render() {
        const { classes, product: {
            imageUrl,
            id,
            title
        }} = this.props;

        return (
            <Chip
                avatar={<Avatar> <Image src={imageUrl} height='50px' /> </Avatar>}
                label={
                    <NavLink
                        className={classes.link}
                        to={productPath(id)}
                    >
                        {title}
                    </NavLink>
                }
                classes={{label: classes.root}}
            />
        );
    }
}

export default withStyles(styles)(ProductChip);