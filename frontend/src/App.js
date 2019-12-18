import React, { useEffect, useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

//Components
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import contextValue from "../src/context API/Context";
const App = () => {
  const context = useContext(contextValue);
  useEffect(() => {
    Materialize.AutoInit();
    console.log(context);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
