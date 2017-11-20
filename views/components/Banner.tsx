import * as React from 'react';
//import * as AppBar from 'muicss/lib/react/appbar'; <-- TODO: wait for .ts types integration
const AppBar = require('muicss/lib/react/appbar');

export const Banner: React.SFC<{}> = props => (
  <AppBar className='navigation'>
    Paul R. Reesman
  </AppBar>
);
