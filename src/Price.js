import React, { Component } from 'react';

class Price extends Component {
    render() {
        const { currency } = this.props;
        return(
            <span>
                {this.props.children}
                {currency}
            </span>
        );
    }
}

export default Price;