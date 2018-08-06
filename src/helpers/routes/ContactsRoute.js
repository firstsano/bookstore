import React from 'react';


export const contactsPath = () => `/contacts`;

export default {
    name: 'Contacts',
    exact: true,
    strict: false,
    path: contactsPath(),
    render: () => "contacts"
};