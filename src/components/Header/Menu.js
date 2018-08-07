import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
    IconButton,
    Menu as BaseMenu,
    MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { element: null };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen(event) {
        this.setState({ element: event.currentTarget });
    }

    handleClose(event) {
        this.setState({ element: null });
    }

    render() {
        const { options } = this.props;
        const { selected, element } = this.state;
        const isOpen = Boolean(element);

        return (
            <Fragment>
                <IconButton color="inherit" onClick={this.handleOpen}>
                    <MenuIcon />
                </IconButton>
                <BaseMenu
                    anchorEl={element}
                    open={isOpen}
                    onClose={this.handleClose}
                >
                    {options.map(option => (
                        <MenuItem
                            component={NavLink}
                            to={option.url}
                            key={option.name}
                            onClick={this.handleClose}
                        >
                            {option.name}
                        </MenuItem>
                    ))}
                </BaseMenu>
            </Fragment>
        );
    }
}

Menu.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })).isRequired
};

export default Menu;