import { Navbar, NavItem } from 'react-materialize';
import React, { Component } from 'react';
import data from '../../data.json';

/// Navigation Bar
class Navigation_Controller extends Component {
  static GetObj (obj) {
    return data[obj]
  }

  render () {
    return(
      <div>
        <Navbar className="blue-grey darken-2" brand="Paul R. Reesman" right>
          {Object.keys(data).map( (key,idx) =>
            <NavItem className={this.props.selectedKey == key ? "active" : "not-active"}
                     key={key}
                     href={"#" + key}
                     onClick={(evt) => this.props.click(key,data[key])}>
              {key}
            </NavItem>
                    )}
        </Navbar>
      </div>
    );
  }
}

export default Navigation_Controller;