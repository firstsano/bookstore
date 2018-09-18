import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createPortal } from 'react-dom';

import clientComponent from '~/src/helpers/clientComponent';


const styles = (theme) => ({
    layout: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100
    },
    modal: {
        position: 'absolute',
        width: '80%',
        height: '80%',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    }
});

class Modal extends Component {
    constructor(props) {
        super(props);
        this.layout = createRef();
    }

    handleLayoutClick(e) {
        if (e.target === this.layout.current) {
            this.props.onLayoutClick(e);
        }
    }

    render() {
        const { classes, className } = this.props;
        const modalRoot = document.getElementById('modal-root');
        const modal =
            <div
                ref={this.layout}
                onClick={(e) => this.handleLayoutClick(e)}
                className={classes.layout}
            >
                <div className={[classes.modal, className].join(" ")}>
                    {this.props.children}
                </div>
            </div>
        ;

        return createPortal(modal, modalRoot);
    }
}

export default clientComponent(withStyles(styles)(Modal));
