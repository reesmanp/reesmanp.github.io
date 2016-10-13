import { Image, PageHeader } from 'react-bootstrap';
const React = require('react');
var Navigation = require('./NavigationController');

/// Profile Picture
const profPic = (
    <a href="https://github.com/reesmanp" target="_blank" style={{
        width:"35%",
        display:"block",
        margin:"auto"
    }} >
        <Image src="./images/new_prof_pic.jpg" responsive rounded />
    </a>
);

/// Main div for the page
module.exports = React.createClass({
    render: function () {
        return(
            <div style={{
                background:"#888888",
                margin:"0px 0px 0px 0px",
                padding:"0px 0px 0px 0px",
                font:"normal 90% arial,helvetica,sans-serif",
                verticalAlign:"top",
                height:"100%",
                minHeight:window.innerHeight + 'px'
            }} >
                <br />
                <div className="page-header" style={{backgroundColor:"#C0C0C0", margin:"0px 0 0px" }}>
                    <h1 style={{ marginTop:"0" }}>Paul R. Reesman</h1>
                </div>
                <Navigation />
                <br />
            </div>
        );
    }
});