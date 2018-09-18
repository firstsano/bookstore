import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

import Contacts from '~/src/components/Contacts';


class ContactsPage extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title> Контакты </title>
                </Helmet>

                <Contacts />
            </Fragment>
        );
    }
}

export default ContactsPage;