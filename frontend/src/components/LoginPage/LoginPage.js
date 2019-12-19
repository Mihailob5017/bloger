import React, { useEffect } from "react";
import M from "materialize-css";
import LoginModal from "./Log/LoginModal";
import Register from "./Log/Register";
import Login from "./Log/Login";
const LoginPage = () => {
  useEffect(() => M.AutoInit(), []);
  return (
    <>
      <LoginModal />
      <Register />
      <Login />
    </>
  );
};

export default LoginPage;
