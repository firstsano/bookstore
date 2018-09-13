import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';

import Layout from './Layout';
import Field from './Field';


class OrderForm extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Field
                    gridWidth={6}
                    icon={AccountCircle}
                    name="username"
                    fieldProps={{
                        label: 'ФИО',
                        fullWidth: true
                    }}
                />
                <Field
                    gridWidth={6}
                    icon={ContactPhone}
                    name="phone"
                    fieldProps={{
                        label: 'Телефон',
                    }}
                />
                <Field
                    gridWidth={6}
                    icon={Email}
                    name="email"
                    fieldProps={{
                        label: 'E-mail',
                    }}
                />
                <Field
                    gridWidth={6}
                    alignItems="center"
                    icon={LocationOn}
                    name="address"
                    fieldProps={{
                        label: 'Адрес',
                        multiline: true,
                        rows: 3
                    }}
                />
            </Layout>
        );
    }
}

export default OrderForm;
