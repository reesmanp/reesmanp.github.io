import { Image } from 'react-bootstrap'
var Navigation = require('./NavigationController')

/// Profile Picture
const profPic = (
    <a href="https://github.com/reesmanp" target="_blank" style={{
        width:"35%",
        display:"block",
        margin:"auto"
    }} >
        <Image src="../images/new_prof_pic.jpg" responsive rounded />
    </a>
);

/// Main div for the page
module.exports = React.createClass({
    render: function () {
        return(
            <div style={{
                background:"#1181AA",
                margin:"0px 0px 0px 0px",
                padding:"0px 0px 0px 0px",
                font:"normal 90% arial,helvetica,sans-serif",
                verticalAlign:"top",
                height:"100%",
                minHeight:window.innerHeight + 'px'
            }} >
                <br />
                {profPic}
                <br />
                <Navigation />
                <br />
            </div>
        );
    }
});