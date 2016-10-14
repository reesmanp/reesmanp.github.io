//import { Panel } from 'react-bootstrap';
import { CardPanel } from 'react-materialize';
const React = require('react');
const data = require('../../data.json');

/// Populates the data rendered when Navigation bar is clicked --- for text
var GetData_Text = React.createClass({
    getInitialState: function () {
        return {
            mouseHover:-1
        }
    },

    MouseOver: function (idx) {
        this.setState({
            mouseHover:idx
        });
    },

    MouseOut: function(evt) {
        this.setState({
            mouseHover:-1
        });
    },

    render: function() {
        if (!data.hasOwnProperty(this.props.selectedKey)) {return null}
        return(
            <div>
                {Object.keys(data[this.props.selectedKey]).map((key,idx) =>
                    <CardPanel header={key}>
                        {data[this.props.selectedKey][key]}
                    </CardPanel>
                )}
            </div>
        );
    }
});

module.exports = GetData_Text;