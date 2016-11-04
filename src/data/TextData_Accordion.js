import { Collapsible, CollapsibleItem } from 'react-materialize';
import GetData_Text from './TextData';
const React = require('react');

/// Populates the data rendered when Navigation bar is clicked --- for nested text
var GetData_Accordion = React.createClass({
  render: function () {
    return(
      <Collapsible accordion popout defaultActiveKey={-1}>
        {Object.keys(this.props.selectedObj).map( (key,idx) =>
          <CollapsibleItem header={key} key={idx} eventKey={idx}>
            <GetData_Text selectedKey={key} selectedObj={this.props.selectedObj[key]}/>
          </CollapsibleItem>
        )}
      </Collapsible>
    )
  }
});

module.exports = GetData_Accordion;