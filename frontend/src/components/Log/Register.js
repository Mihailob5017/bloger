import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="register" className="modal  grey-transparent">
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
            <label for="username">Username</label>
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
            <label for="first_name">First Name</label>
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
            <label for="last_name">Last Name</label>
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
            <label for="password">Password</label>
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
            <label for="email">Email</label>
          </div>
        </div>
      </div>
      <div className="modal-footer transparent">
        <a
          href="#!"
          className="modal-close waves-effect waves-blue blue darken-2 white-text btn-flat"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Register;
