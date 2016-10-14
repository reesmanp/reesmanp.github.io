import { CardPanel } from 'react-materialize';
import GetData_Text from './TextData';
const React = require('react');

/// Populates the data rendered when Navigation bar is clicked --- for nested text
var GetData_NestedText = React.createClass({
    render: function () {
        return(
            <div>
                {Object.keys(this.props.selectedObj).map( (key,idx) =>
                    <CardPanel key={this.props.selectedKey + '_' + key}>
                        <h1>{key}</h1>
                        <br />
                        <br />
                        <GetData_Text selectedKey={key} selectedObj={this.props.selectedObj[key]}/>
                    </CardPanel>
                )}
            </div>
        )
    }
});

module.exports = GetData_NestedText;