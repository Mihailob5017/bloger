import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contextValue from "../context API/Context";

const Navbar = () => {
  const context = useContext(contextValue);

  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a href="#" className="brand-logo">
          Bloger<i className="large material-icons">android</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <a href="#" onClick={context.logOut}>
              <i class="material-icons">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
