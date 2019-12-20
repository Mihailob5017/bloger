import React, { useEffect, useContext } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import contextValue from "../../../context API/Context";
const Blog = ({ blog }) => {
  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll(".tooltipped"));
  }, []);
  const context = useContext(contextValue);
  
  //
  
  return (
    <li className="collection-item transparent avatar">
      <img src={require("./avatar.png")} alt="" className="circle" />
      <span className="title white-text">{blog.username}</span>
      <h6 className="white-text">
        {blog.header} <br />
        {blog.body}
      </h6>
      <a href="#!" className="secondary-content">
        {context.user.username !== blog.username ? (
          <Link
            to="/"
            className="transparent tooltipped"
            data-position="left"
            data-tooltip="View Profile"
          >
            <i className="material-icons white-text">android</i>
          </Link>
        ) : (
          <i
            onClick={() => {
              context.deleteBlog(blog._id);
            }}
            className="material-icons red-text"
          >
            delete
          </i>
        )}
      </a>
    </li>
  );
};

export default Blog;
