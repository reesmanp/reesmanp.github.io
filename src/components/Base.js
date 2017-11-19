import React, { Component } from 'react';
import Navigation_Controller from './NavigationController';
import GetData_Controller from './DataController';

class Base extends Component {
  constructor (props) {
    super(props);

    const startingKey = window.location.hash ? window.location.hash.slice(1).replace(/^tab_\d?$/, "Blog") : "Welcome";
    this.state = {
      selectedKey: startingKey,
      selectedObj: Navigation_Controller.GetObj(startingKey)
    };

    this.OnSelect = this.OnSelect.bind(this);
  }

  OnSelect (key, obj) {
    this.setState({
      selectedKey: key,
      selectedObj: obj
    });
  }

  render () {
    return(
      <div className="container">
        <Navigation_Controller click={this.OnSelect} selectedKey={this.state.selectedKey}/>
        <GetData_Controller selectedKey={this.state.selectedKey} selectedObj={this.state.selectedObj}/>
      </div>
    );
  }
}

export default Base;
