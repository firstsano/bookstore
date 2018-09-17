import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '~/src/components/Layout';
import Header from '~/src/components/Header';
import ModalSwitch from '~/src/helpers/routes/ModalSwitch';
import history from '~/src/helpers/history';
import store from '~/src/store';
import { historyCb } from '~/src/helpers/prepareData';


history.listen(historyCb);
historyCb(window.location, 'PUSH');

export default () => (
    <Layout>
        <Router history={history}>
            <Provider store={store}>
                <Fragment>
                    <Header title="Pragmatic Book Store" />
                    <ModalSwitch />
                </Fragment>
            </Provider>
        </Router>
    </Layout>
);
