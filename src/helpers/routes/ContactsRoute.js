import React from 'react';

import ContactsPage from '~/src/views/ContactsPage';


export const contactsPath = () => `/contacts`;

export default {
    name: 'Contacts',
    exact: true,
    strict: false,
    path: contactsPath(),
    render: () => <ContactsPage />
};