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
        const { classes, product } = this.props;
        const { id, title, mainImage } = product;

        return (
            <Chip
                avatar={<Avatar> <Image src={mainImage.url} height='50px' /> </Avatar>}
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