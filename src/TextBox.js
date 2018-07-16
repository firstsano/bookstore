import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        return(
            <span>{this.props.children}</span>
        );
    }
}

export default TextBox;