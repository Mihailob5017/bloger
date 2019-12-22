import React, { useState,useContext } from "react";
import contextValue from '../../../context API/Context';
import M from "materialize-css";
const axios = require("axios").default;
const Login = () => {
  const [username, setUsername] = useState("mixailo146");
  const [password, setPassword] = useState("jsmv4183");
  const [email, setEmail] = useState("mihailob5017@gmail.com");

  const context = useContext(contextValue)

  const handleSubmit = async () => {
    if (username === "" || password === "" || email === "") {
      M.toast({ html: "All fields must be sumbited" });
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      try {
        const res = await axios.post("http://localhost:5000/login", newUser);
        context.setToken(res.data);
        M.toast({ html: "Successfully Loged in" });
      } catch (error) {
        M.toast({ html: "Username,Email or Password are incorrect" });
      }
    }
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div id="login" className="modal  grey-transparent">
      <div className="modal-content">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="validate"
              style={{ color: "white" }}
              autoComplete="off"
            />
            <label htmlFor="username">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="validate"
              style={{ color: "white" }}
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="validate"
              style={{ color: "white" }}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
      </div>
      <div className="modal-footer transparent">
        <a
          href="#!"
          className="modal-close waves-effect waves-blue blue darken-2 white-text btn-flat"
          onClick={handleSubmit}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
