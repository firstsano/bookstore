import React, { Component } from 'react';

import TextBox from './TextBox';


class Price extends Component {
    render() {
        const { currency } = this.props;
        return(
            <span>
                <TextBox> {this.props.children} </TextBox>
                <TextBox> {currency} </TextBox>
            </span>
        );
    }
}

export default Price;