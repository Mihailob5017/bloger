import React, { useState ,useContext} from "react";
import M from "materialize-css";
import contextValue from "../../../context API/Context";
const WriteBlog = () => {
  const context = useContext(contextValue)
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (title === "") M.toast({ html: "The title field must be filled!" });
    else {
      context.postBlog(title,text);
    }
    setTitle('');
    setText('');
  };

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
          <label htmlFor="body">Text : (Optional)</label>
        </div>
      </div>
      <div className="row">
        <a
          onClick={handleSubmit}
          className="waves-effect waves-light btn blue darken-2 col s12"
        >
          <i className="material-icons right">cloud</i>Tell us what's on you
          mind!
        </a>
      </div>
    </div>
  );
};

export default WriteBlog;
