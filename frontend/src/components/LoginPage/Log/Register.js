import React, { useState, useContext } from "react";
import contextValue from "../../../context API/Context";
import M from "materialize-css";
const axios = require("axios").default;
const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //context
  const context = useContext(contextValue);

  const handleSubmit = async () => {
    if (
      username === "" ||
      firstname === "" ||
      lastname === "" ||
      password === "" ||
      email === ""
    ) {
      M.toast({ html: "All fields must be sumbited" });
    } else {
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password
      };
      try {
        const res = await axios.post("http://localhost:5000/register", newUser);
        M.toast({ html: "Successfully Registered! Welcome to Bloger" });
       context.setToken(res.data) 
      } catch (error) {
        console.log(error);
        M.toast({
          html:
            "Something went wrong,make sure all fields have a min of 5 characters"
        });
      }
    }
    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setUsername("");
  };
  return (
    <div id="register" className="modal ">
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
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              className="validate"
              style={{ color: "white" }}
              autoComplete="off"
            />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              className="validate"
              style={{ color: "white" }}
              autoComplete="off"
            />
            <label htmlFor="last_name">Last Name</label>
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
          Register
        </a>
      </div>
    </div>
  );
};

export default Register;
