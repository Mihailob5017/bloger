import React, { useContext } from "react";
import contextValue from "../../../context API/Context";

//COMPONENTS

const LoginModal = () => {
  const context = useContext(contextValue);
  return (
    <div className="center-modals">
      {context.isUserAuthenticated ? (
        <a
          onClick={context.logOut}
          className="waves-effect col waves-light btn-large blue darken-2 modal-trigger modal-btns"
        >
          Log out<i className="material-icons right">exit_to_app</i>
        </a>
      ) : (
        <>
          {" "}
          <a
            href="#login"
            className="waves-effect col waves-light btn-large blue darken-2 modal-trigger modal-btns"
          >
            Log In
          </a>
          <a
            href="#register"
            className="waves-effect  col waves-light btn-large blue darken-2 modal-trigger modal-btns"
          >
            Register
          </a>
        </>
      )}
    </div>
  );
};

export default LoginModal;
