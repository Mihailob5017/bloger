import React, { useEffect, useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

//Components
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import contextValue from "../src/context API/Context";
const App = () => {
  const context = useContext(contextValue);
  useEffect(() => {
    Materialize.AutoInit();
    console.log(context);
  }, []);

  return (
    <Router>
      <div>
        <img
          className="backgound-image"
          src={require("./bg.jpg")}
          alt="bacground image"
        />
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
