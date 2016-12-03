"use strict";
(() => {

    var browser = require(__dirname + "/utilities/DetectBrowser");

    if (browser.name === "MSIE" && browser.version < 9) {
        document.write("You are using a deprecated browser. Please upgrade your current browser.");
        return
    }

    var React = require("react");
    var ReactDOM = require("react-dom");
    var Base = require(__dirname + "/components/Base");
    require("smoothscroll-polyfill");

    window.addEventListener("load", function load(event) {

        window.alert = () => {};

        window.removeEventListener("load", load, false);

        ReactDOM.render(
            <Base />,
            document.getElementById("reactContainer")
        )

    })

})()
