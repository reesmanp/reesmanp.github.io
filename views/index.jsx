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


function App() {
  return (
    <Router hashType='slash'>
      <Banner/>
      <Menu/>
      <Switch>
        <Route exact path='/resume'>
          <Resume/>
        </Route>
        <Route path='/:tab'>
          <Portfolio/>
        </Route>
        <Route>
          <Portfolio/>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('reactContainer')
);
