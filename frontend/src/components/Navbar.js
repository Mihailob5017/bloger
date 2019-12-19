import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2" >
        <a href="#" className="brand-logo">
        Bloger<i className="large material-icons">android</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
           <Link to='/home'>Home</Link>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
           <Link to='/'>Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
