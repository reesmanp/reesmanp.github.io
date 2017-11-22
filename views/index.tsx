import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Base } from './components/Base';

require('../static/sass/portfolio.scss');

ReactDOM.render(
  <Base />,
  document.getElementById('reactContainer')
);