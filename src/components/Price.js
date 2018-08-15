import React from 'react';

import Numerical from '~/src/components/Numerical';


export default ({ children, className }) => (
    <Numerical label={'руб.'} className={className} >
        {children}
    </Numerical>
);