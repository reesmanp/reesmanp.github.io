import { Card } from 'react-materialize';
import React, { Component } from 'react';

/// Populates the data rendered when Navigation bar is clicked --- for contact info
class GetData_Contact extends Component {
  render () {
    return(
      <Card title={this.props.selectedKey} key={this.props.selectedKey}>
        {Object.keys(this.props.selectedObj).map( (key,idx) =>
          <div key={this.props.selectedKey + '_' + key}>
            {key}: <div dangerouslySetInnerHTML={ { __html:this.props.selectedObj[key]} }/>
          </div>
        )}
      </Card>
    );
  }
}

export default GetData_Contact;