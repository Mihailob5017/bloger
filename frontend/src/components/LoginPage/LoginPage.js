import React from 'react'

import Navbar from "../Navbar";
import LoginModal from "./Log/LoginModal";
import Register from "./Log/Register";
import Login from "./Log/Login";
const LoginPage = () => {
    return (
        <div>
      <img
        className="backgound-image"
        src={require("../../bg.jpg")}
        alt="bacground image"
      />
      <Navbar />
      <LoginModal />
      <Register />
      <Login />
    </div>
    )
}

export default LoginPage
