import React, { useContext } from "react";
import contextValue from "../../../context API/Context";
const Blog = ({ blog }) => {
  const context = useContext(contextValue);
  return (
    <li className="collection-item transparent avatar">
      <img src={require("../../HomePage/Posts/avatar.png")} alt="" className="circle" />
      <span className="title white-text">{blog.header}</span>
      <h6 className="white-text">
        {blog.body} <br />
      </h6>
      <a href="#!" className="secondary-content">
          <i
            onClick={() => {
              context.deleteBlog(blog._id);
            }}
            className="material-icons red-text"
          >
            delete
          </i>
      </a>
    </li>
  );
};

export default Blog;
