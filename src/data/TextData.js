import { CardPanel } from 'react-materialize';
const React = require('react');
const data = require('../../data.json');

/// Populates the data rendered when Navigation bar is clicked --- for text
var GetData_Text = React.createClass({
    render: function() {
        if (!data.hasOwnProperty(this.props.selectedKey)) {return null}
        return(
            <div>
                {Object.keys(data[this.props.selectedKey]).map((key,idx) =>
                    <CardPanel key={this.props.selectedKey + '_' + key}>
                        <b>{key}</b>
                        <br />
                        {data[this.props.selectedKey][key]}
                    </CardPanel>
                )}
            </div>
        );
    }
});

module.exports = GetData_Text;