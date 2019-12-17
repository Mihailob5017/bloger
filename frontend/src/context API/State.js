import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import {} from "./Types";
const axios = require("axios").default;

const State = props => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    token: "",
    userBlogs: [],
    allBlogs: [],
    isUserAuthenticated: false
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  //All reducers and actions

  //END OF ALL
  return <Context.Provider value={{}}></Context.Provider>;
};

export default State;
