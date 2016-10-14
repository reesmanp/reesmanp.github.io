import { CardPanel } from 'react-materialize';
const React = require('react');

/// Populates the data rendered when Navigation bar is clicked --- for text
var GetData_Text = React.createClass({
    render: function() {
        return(
            <div>
                {Object.keys(this.props.selectedObj).map((key,idx) =>
                    <CardPanel key={this.props.selectedKey + '_' + key}>
                        <b>{key}</b>
                        <br />
                        <div dangerouslySetInnerHTML={ { __html:this.props.selectedObj[key]} }/>
                    </CardPanel>
                )}
            </div>
        );
    }
});

module.exports = GetData_Text;