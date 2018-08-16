import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { notFoundPath } from '~/src/helpers/routes/NotFoundRoute';
import { getImage } from '~/src/helpers/contentful';
import Image from '~/src/components/Image';


const styles = {
    root: {
        textAlign: 'center',
        height: '100%',
        width: '100%'
    }
}

class ImagePage extends Component {
    constructor(props) {
        super(props);
        this.state = { image: null }
    }

    componentDidMount() {
        this.fetchProduct().catch((err) => {
            this.setState({ image: false });
        });
    }

    async fetchProduct() {
        const image = await getImage(this.props.id);
        this.setState({ image });
    }

    render() {
        const { image } = this.state;
        const { classes } = this.props;

        if (image === null) {
            return 'Загрузка...';
        } else if (image === false) {
            return <Redirect to={{ pathname: notFoundPath() }}/>
        }

        return (
            <div className={classes.root}>
                <Image src={image} height={'100%'} />
            </div>
        );
    }
}

export default withStyles(styles)(ImagePage);