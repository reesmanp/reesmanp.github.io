import { Card } from 'react-materialize';
const React = require('react');

/// Populates the data rendered when Navigation bar is clicked --- for contact info
var GetData_Contact = React.createClass({
    render: function() {
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
});

module.exports = GetData_Contact;