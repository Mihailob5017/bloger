import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import State from "./context API/State";

ReactDOM.render(
  <State>
    <App />
  </State>,
  document.getElementById("root")
);
