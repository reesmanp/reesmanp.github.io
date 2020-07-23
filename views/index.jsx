import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {
  Banner,
  Menu,
  Portfolio,
  Resume
} from './components';

// import { Base } from './components/base';


function App() {
  return (
    <Router hashType='slash'>
      <Banner/>
      <Menu/>
      <Switch>
        <Route exact path='/resume' component={Resume}/>
        <Route path='/:tab' component={Portfolio}/>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('reactContainer')
);
