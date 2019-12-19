import React, { useState } from "react";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="grey-transparent" style={{ marginBottom: "3em" }}>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="header"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ color: "white" }}
            className="validate"
          />
          <label htmlFor="header">Title : </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="body"
            style={{ color: "white" }}
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
            className="validate"
          />
          <label htmlFor="body">Text :</label>
        </div>
      </div>
      <div className="row">
        <a className="waves-effect waves-light btn blue darken-2 col s12">
          <i className="material-icons right">cloud</i>Tell us what's on you
          mind!
        </a>
      </div>
    </div>
  );
};

export default WriteBlog;
