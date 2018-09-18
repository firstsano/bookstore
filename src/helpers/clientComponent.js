import React, { Component } from 'react';


export default (WrappedComponent) => {
    return class extends Component {
        render() {
            if (typeof(window) === 'undefined') {
                return '';
            }

            return <WrappedComponent {...this.props} />
        }
    }
}