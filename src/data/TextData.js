import { Table } from 'react-bootstrap';
const React = require('react');

/// Populates the data rendered when Navigation bar is clicked --- for text
module.exports = React.createClass({
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
            <Table bordered condensed align="center">
                <thead>
                <tr>
                    <th style={{
                        backgroundColor:"#F26E26"
                    }}>
                        OID Name
                    </th>
                    <th style={{
                        backgroundColor:"#F26E26"
                    }}>
                        OID
                    </th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(data[this.props.selectedKey]).map( (key,idx) =>
                    <tr eventKey={idx} onMouseOver={this.MouseOver.bind(null, idx)} onMouseOut={this.MouseOut} style={{backgroundColor:idx === this.state.mouseHover ? "#F26E26" : ""}}>
                        <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                            <b>{key}</b>
                        </td>
                        <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                            <b><font color="black">
                                {data[this.props.selectedKey][key]}
                            </font></b>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
});