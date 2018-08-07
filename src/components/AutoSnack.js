import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';


class AutoSnack extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        const { duration, message } = this.props;

        return <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={duration}
                    message={message}
                    onClose={this.handleClose}
                />
        ;
    }
}

export default AutoSnack;