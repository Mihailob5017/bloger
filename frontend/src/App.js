import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "./style.css";
const App = () => {
  useEffect(() => {
    Materialize.AutoInit();
  }, []);

  return <div></div>;
};

export default App;
