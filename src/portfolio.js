"use strict";

import browser from "./utilities/DetectBrowser";
import React from "react";
import ReactDOM from "react-dom";
import Base from "./components/Base";

(() => {

  if (browser.name === "MSIE" && browser.version < 9) {
    document.write("You are using a deprecated browser. Please upgrade your current browser.");
    return
  }

  require("smoothscroll-polyfill");

  window.addEventListener("load", function load(event) {

    window.alert = () => {};

    window.removeEventListener("load", load, false);

    ReactDOM.render(
      <Base />,
      document.getElementById("reactContainer")
    )
  })

})();
