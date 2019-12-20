import React, { useEffect, useContext } from "react";
import contextValue from "../../../context API/Context";
import Blog from "./Blog";
const Blogs = () => {
  const context = useContext(contextValue);
  useEffect(() => {
    context.isUserAuthenticated && context.getBlogs();
  }, []);

  return (
    <ul
      className="collection with-header my-coll  transparent"
      style={{ border: "none" }}
    >
      <li className="collection-header white-text transparent">
        <h2>All Blogs</h2>
      </li>

      {context.allBlogs.length === 0 ? (
        <li
          className="collection-header white-text transparent"
          style={{ border: "none" }}
        >
          <h4>There are no blogs currently,be the first to write some!</h4>
        </li>
      ) : (
        context.allBlogs.map((blog, i) => <Blog key={i} blog={blog} />)
      )}
    </ul>
  );
};

export default Blogs;
