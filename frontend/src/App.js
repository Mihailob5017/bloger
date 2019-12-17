import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

//Components
import Navbar from "./components/Navbar";
import LoginModal from "./components/Log/LoginModal";
import Register from "./components/Log/Register";
import Login from "./components/Log/Login";
const App = () => {
  useEffect(() => {
    Materialize.AutoInit();
  }, []);

  return (
    <div>
      <img
        className="backgound-image"
        src={require("./bg.jpg")}
        alt="bacground image"
      />
      <Navbar />
      <LoginModal />
      <Register />
      <Login />
    </div>
  );
};

export default App;
