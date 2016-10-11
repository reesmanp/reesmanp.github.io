import { Text, Hyperlink } from '../data/DataExport';
const React = require('react');

/// Controller to pass the navigated data to the correct component in order to render it properly
module.exports = React.createClass({
    render: function () {
        switch (this.props.selectedKey) {
            case "Bio":
                return(<GetData_Text selectedKey={this.props.selectedKey} />);
            case "Portfolio":
                return(<GetData_Hyperlink selectedKey={this.props.selectedKey} />);
            case "Tools I Use":
                return(<GetData_Hyperlink_Multiple selectedKey={this.props.selectedKey} />);
            case "Resume":
                return(<GetData_Hyperlink selectedKey={this.props.selectedKey} />);
            case "Contact Me":
                return(<GetData_Servers selectedKey={this.props.selectedKey} />);
            default:
                return(null)
        }
    }
});