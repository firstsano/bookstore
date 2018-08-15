import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextBox from './TextBox';


class Numerical extends Component {
    static get propTypes() {
        return ({
            label: PropTypes.string.isRequired
        });
    }

    render() {
        const { label, children, className } = this.props;

        return(
            <span className={className}>
                <TextBox> {children} </TextBox>
                <TextBox> {label} </TextBox>
            </span>
        );
    }
}

export default Numerical;