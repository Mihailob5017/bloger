import React, { useEffect, useContext } from "react";
import contextValue from "../../context API/Context";
//COMPONENTS
import NotLoggedIn from "./NotLoggedIn";
import Blogs from "./Posts/Blogs";
import WriteBlog from './Posts/WriteBlog';
const HomePage = () => {
  const context = useContext(contextValue);

  return (
    <div style={{ marginTop: "4em" }} className="container">
      {context.isUserAuthenticated ? <><WriteBlog/> <Blogs /></>: <NotLoggedIn />}
    </div>
  );
};

export default HomePage;
