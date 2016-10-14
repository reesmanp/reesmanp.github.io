import { Navbar, NavItem, C } from 'react-materialize';
const React = require('react');
const data = require('../../data.json');

/// Navigation Bar
module.exports = React.createClass({
    render: function () {
        return(
            <div>
                <Navbar className="blue-grey darken-2">
                    {Object.keys(data).map( (key,idx) =>
                        <NavItem className={this.props.selectedKey == key ? "active" : "not-active"}
                                 key={key} href="#"
                                 onClick={(evt) => this.props.click(key,data[key])}>
                            {key}
                        </NavItem>
                    )}
                </Navbar>
            </div>
        );
    }
});