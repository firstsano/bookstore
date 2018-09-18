import 'typeface-roboto';
import React from 'react';
import { hydrate } from 'react-dom';

import App from '~/src/components/App';


hydrate(
    <App />,
    document.getElementById('root')
);
