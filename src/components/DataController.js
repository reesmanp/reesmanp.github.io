import GetData_Text from '../data/TextData';
import GetData_NestedText from '../data/TextData_Nested';
import GetData_PDF from '../data/PDFData';
import GetData_Contact from '../data/ContactData';
import GetData_Accordion from '../data/TextData_Accordion';
const React = require('react');

/// Controller to pass the navigated data to the correct component in order to render it properly
module.exports = React.createClass({
    render: function () {
        switch (this.props.selectedKey) {
            case "Welcome":
            case "Bio":
                return(<GetData_Text selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Portfolio":
            case "Tools I Use":
                return(<GetData_NestedText selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Resume":
                return(<GetData_PDF/>);
            case "Contact Me":
                return(<GetData_Contact selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            case "Blog":
                return(<GetData_Accordion selectedKey={this.props.selectedKey} selectedObj={this.props.selectedObj}/>);
            default:
                return(<div/>)
        }
    }
});