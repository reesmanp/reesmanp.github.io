import GetData_Text from '../data/TextData';
import GetData_NestedText from '../data/TextData_Nested'
const React = require('react');

/// Controller to pass the navigated data to the correct component in order to render it properly
module.exports = React.createClass({
    render: function () {
        switch (this.props.selectedKey) {
            case "Bio":
                return(<GetData_Text selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Portfolio":
                return(<GetData_NestedText selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Tools I Use":
                return(<GetData_Hyperlink_Multiple selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Resume":
                return(<GetData_Hyperlink selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Contact Me":
                return(<GetData_Servers selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            default:
                return(<div/>)
        }
    }
});