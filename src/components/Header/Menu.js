import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
    IconButton,
    Menu as BaseMenu,
    MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { cartPath } from '~/src/helpers/routes/CartRoute';
import { catalogPath } from '~/src/helpers/routes/CatalogRoute';
import { contactsPath } from '~/src/helpers/routes/ContactsRoute';


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

    handleClose() {
        this.setState({ element: null });
    }

    render() {
        const { element } = this.state;
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
                    <MenuItem
                        component={NavLink}
                        to={catalogPath()}
                        onClick={this.handleClose}
                    >
                        Main
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to={cartPath()}
                        onClick={this.handleClose}
                    >
                        Cart
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to={contactsPath()}
                        onClick={this.handleClose}
                    >
                        Contacts
                    </MenuItem>
                </BaseMenu>
            </Fragment>
        );
    }
}

export default Menu;