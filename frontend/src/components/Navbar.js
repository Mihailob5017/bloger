import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2" >
        <a href="#" className="brand-logo">
        Bloger<i class="large material-icons">android</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
