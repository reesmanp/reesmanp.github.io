import { CardPanel } from 'react-materialize';
import GetData_Text from './TextData';
import React, { Component } from 'react';

/// Populates the data rendered when Navigation bar is clicked --- for nested text
class GetData_NestedText extends Component {
  render () {
    return(
      <div>
        {Object.keys(this.props.selectedObj).map( (key,idx) =>
          <CardPanel key={this.props.selectedKey + '_' + key}>
            <h1>{key}</h1>
            <br />
            <br />
            <GetData_Text selectedKey={key} selectedObj={this.props.selectedObj[key]} chips={idx === 0}/>
          </CardPanel>
        )}
      </div>
    )
  }
}

export default GetData_NestedText;