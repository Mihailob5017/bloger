import React, { useEffect } from "react";

const Userpage = ({ user }) => {
  useEffect(() => {
    console.log(user);
  }, []);
  return <div></div>;
};

export default Userpage;
