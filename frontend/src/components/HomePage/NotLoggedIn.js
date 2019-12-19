import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  useEffect(() => {
    const instance = M.Modal.init(document.querySelector(".modal"));
    instance.open();
  }, []);
  return (
    <div id="modal1" className="modal grey-transparent  ">
      <div className="modal-content white-text">
        <h4>It Turns Out you are not Logged in</h4>
        <p>
          Go back to the Log-in page or create a new Account and come back
          after!
        </p>
      </div>
      <div className="modal-footer transparent ">
        <Link
          style={{ border: "1px solid white" }}
          className="modal-close  btn-flat "
          style={{ color: "white" }}
          to="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedIn;
