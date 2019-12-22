import React from "react";

const Blog = ({ blog }) => {
 
  return (
    <li className="collection-item transparent avatar">
      <img src={require("./avatar.png")} alt="" className="circle" />
      <span className="title white-text">{blog.username}</span>
      <h6 className="white-text">
        {blog.header} <br />
        {blog.body}
      </h6>
    </li>
  );
};

export default Blog;
