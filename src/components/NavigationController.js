import{ Navbar, NavItem, Nav } from 'react-bootstrap';
const React = require('react');
const data = require('../../data.json');
var GetData_Controller = require('./DataController');

/// Navigation Bar
module.exports = React.createClass({
    getInitialState: function () {
        return {
            selectedKey:0,
            mouseHover:0
        }
    },

    OnSelect: function(key, evt) {
        this.setState({
            selectedKey:key
        });
    },

    MouseOver: function (evt) {
        this.setState({
            mouseHover:evt.target.innerHTML
        });
    },

    MouseOut: function(evt) {
        this.setState({
            mouseHover:0
        });
    },

    render: function() {
        return(
            <div>
                <Navbar>
                    <Nav bsStyle="pills" activeKey={this.state.selectedKey} onSelect={this.OnSelect} style={{
                        width:"100%",
                        textAlign:"center"
                    }}>
                        {Object.keys(data).map( (key,idx) =>
                            <NavItem eventKey={key} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} style={{
                                float:"none",
                                display:"inline-block",
                                backgroundColor:key === this.state.mouseHover ? "#F26E26" : ""
                            }}>
                                {key}
                            </NavItem>
                        )}
                    </Nav>
                </Navbar>
                <GetData_Controller selectedKey={this.state.selectedKey} />
            </div>
        );
    }
});