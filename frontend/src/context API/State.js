import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import { SET_TOKEN, SET_USER } from "./Types";
const axios = require("axios").default;

const State = props => {
  const initialState = {
    user: {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    },
    token: "",
    userBlogs: [],
    allBlogs: [],
    isUserAuthenticated: false
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  //All reducers and actions

  //get the user from the token
  const getUser = async () => {
    console.log(state.token)
    try {
      const res = await axios.get("http://localhost:5000/user", {
        headers: { "auth-token": state.token }
      });
      console.log(res.data);
      const { username, firstname, lastname, email } = res.data;
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email
      };
      dispatch({type:SET_USER,payload:newUser});


    } catch (error) {
      console.log(error);
    }
  };

  //set the token
  const setToken = token => dispatch({ type: SET_TOKEN, payload: token });

  //END OF ALL
  return (
    <Context.Provider
      value={{
        user: state.user,
        token: state.token,
        isUserAuthenticated: state.isUserAuthenticated,
        setToken,
        getUser
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default State;
