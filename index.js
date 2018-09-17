import 'typeface-roboto';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/src/components/App';
import history from '~/src/helpers/history';
import { historyCb } from '~/src/helpers/prepareData';


history.listen(historyCb);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);