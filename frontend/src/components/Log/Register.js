import React from "react";

const Register = () => {
  return (
    <div id="register" className="modal transparent">
      <div className="modal-content">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="username"
              type="text"
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
