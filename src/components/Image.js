import React, { Component } from 'react';


class Image extends Component {
    render() {
        const { src, width, height, alt, className } = this.props;

        return <img {...{ src, width, height, alt, className }} />;
    }
}

export default Image;