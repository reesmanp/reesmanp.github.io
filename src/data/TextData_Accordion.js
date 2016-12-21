import { Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import GetData_Text from './TextData';
import React, { Component } from 'react';

/// Populates the data rendered when Navigation bar is clicked --- for nested text
class GetData_Accordion extends Component {
  constructor (props) {
    super(props);

    const defaultActiveKey = (Object.keys(this.props.selectedObj).length === 1) ? 0 : -1;
    this.state = {
      active: defaultActiveKey
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(idx, e) {
    return idx === this.state.active ?
      this.setState({
        active: -1
      })
    :
      this.setState({
        active: idx
      });

  }

  render () {
    return(
      <Tabs onChange={this.onChange}>
        {Object.keys(this.props.selectedObj).map( (key,idx) =>
          <Tab id={key}
               title={key}
               key={idx}
               eventKey={key}
               active={this.state.active === idx}>
            <Collapsible accordion
                         popout
                         defaultActiveKey={-1}>
              {Object.keys(this.props.selectedObj[key]).map( (kkey,iidx) =>
                <CollapsibleItem id={kkey}
                                 header={kkey}
                                 key={iidx}
                                 eventKey={kkey}
                                 scroll="smooth"
                                 icon="code">
                  <GetData_Text selectedKey={kkey}
                                selectedObj={this.props.selectedObj[key][kkey]}/>
                </CollapsibleItem>
              )}
            </Collapsible>
          </Tab>
        )}
      </Tabs>
    )
  }
}

export default GetData_Accordion;