import React from 'react';

import Numerical from '~/src/components/Numerical';


export default ({ children }) => (
    <Numerical label={'шт.'}>
        {children}
    </Numerical>
);