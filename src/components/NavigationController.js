//import{ Navbar, NavItem, Nav } from 'react-bootstrap';
import { Navbar, NavItem } from 'react-materialize';
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

    render: function () {
        return(
            <div>
                <Navbar className="blue-grey darken-2">
                    {Object.keys(data).map( (key,idx) =>
                        <NavItem href=''>
                            {key}
                        </NavItem>
                    )}
                </Navbar>
                <GetData_Controller selectedKey={this.state.selectedKey}/>
            </div>
        );
    }

    /*
    render: function() {
        return(
            <div>
                <Navbar fluid style={{
                    backgroundColor:"#C0C0C0"
                }}>
                    <Nav bsStyle="pills" activeKey={this.state.selectedKey} onSelect={this.OnSelect} style={{
                        width:"100%",
                        textAlign:"center"
                    }}>
                        {Object.keys(data).map( (key,idx) =>
                            <NavItem eventKey={key} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} style={{
                                float:"none",
                                fontWeight:"bold",
                                display:"inline-block",
                                backgroundColor:key === this.state.mouseHover ? "#FFCC00" : ""
                            }}>
                                <div style={{ color:"black" }}>{key}</div>
                            </NavItem>
                        )}
                    </Nav>
                </Navbar>
                <GetData_Controller selectedKey={this.state.selectedKey} />
            </div>
        );
    }
    */
});