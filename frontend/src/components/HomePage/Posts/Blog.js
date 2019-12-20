import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll(".tooltipped"));
  }, []);
  return (
    <li className="collection-item transparent avatar">
      <img src={require("./avatar.png")} alt="" className="circle" />
      <span className="title white-text">{blog.username}</span>
      <h6 className="white-text">
        {blog.header} <br />
        {blog.body}
      </h6>
      <a href="#!" className="secondary-content">
        <Link
          to="/"
          class="transparent tooltipped"
          data-position="left"
          data-tooltip="View Profile"
        >
          <i className="material-icons white-text">android</i>
        </Link>
      </a>
    </li>
  );
};

export default Blog;
