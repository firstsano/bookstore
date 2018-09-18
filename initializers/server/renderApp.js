import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch, Route, matchPath } from 'react-router-dom';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
} from '@material-ui/core/styles';

import Layout from '~/src/components/Layout';
import Header from '~/src/components/Header';
import store from '~/src/store';
import routes from '~/src/helpers/routes';
import prepareData from '~/src/helpers/prepareData';


export default (req, res) => {
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const theme = createMuiTheme();
    const generateClassName = createGenerateClassName();
    const context = {};

    const state = {
        routes: [],
        params: {},
        query: {}
    };

    for (let route of routes) {
        const match = matchPath(req.path, route);
        if (match) {
            state.routes.push(route);
            Object.assign(state.params, match.params);
            Object.assign(state.query, req.query);
        }
    }

    const App = () => {
        const mappedRoutes = routes.map((props) => <Route key={props.name} {...props} />);
        return (
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Layout>
                        <Header title="Pragmatic Book Store" />
                        <Switch>
                            {mappedRoutes}
                        </Switch>
                    </Layout>
                </StaticRouter>
            </Provider>
        );
    };

    const StyledApp = () => {
        return (
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                    <App />
                </MuiThemeProvider>
            </JssProvider>
        );
    };

    return prepareData(store, state).then(() => {
        return ({
            content: renderToString(<StyledApp />),
            generatedCss: sheetsRegistry.toString(),
            initialState: JSON.stringify(store.getState())
        });
    })
}