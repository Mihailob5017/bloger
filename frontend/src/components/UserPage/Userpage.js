import React, { useContext} from "react";


import contextValue from '../../context API/Context';
import UserCard from './UserCard';
import NotLoggedIn from '../HomePage/NotLoggedIn';
import Blogs from "./Posts/Blogs";

const Userpage = ({ user }) => {
  const context = useContext(contextValue)
  
  return<div style={{ marginTop: "4em" }} className="container">
  {context.isUserAuthenticated ? (
    <>
      <UserCard user={user} />
      <Blogs username={user.username} />
    </>
  ) : (
    <NotLoggedIn />
  )}
</div>
};

export default Userpage;
