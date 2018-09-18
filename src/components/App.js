import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { matchPath, Router } from 'react-router-dom';
import { parse } from 'qs';

import Layout from '~/src/components/Layout';
import ModalSwitch from '~/src/helpers/routes/ModalSwitch';
import Header from '~/src/components/Header';
import history from '~/src/helpers/history';
import routes from '~/src/helpers/routes';
import store from '~/src/store';
import prepareData from '~/src/helpers/prepareData';


history.listen((location) => {
    const state = {
        routes: [],
        params: {},
        query: {}
    };

    for (let route of routes) {
        const match = matchPath(location.pathname, route);
        if (match) {
            const query = parse(location.search.substr(1));
            state.routes.push(route);
            Object.assign(state.params, match.params);
            Object.assign(state.query, query);
        }
    }

    prepareData(store, state);
});

class App extends Component {
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Layout>
                        <Header title="Pragmatic Book Store" />
                        <ModalSwitch />
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
