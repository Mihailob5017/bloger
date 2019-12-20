import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import { SET_TOKEN, SET_USER, SET_AS_AUTHENTICATED, GET_BLOGS } from "./Types";
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
    try {
      const res = await axios.get("http://localhost:5000/user", {
        headers: { "auth-token": state.token }
      });

      const { username, firstname, lastname, email } = res.data;
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email
      };
      dispatch({ type: SET_USER, payload: newUser });
    } catch (error) {
      console.log(error);
    }
  };

  //set the token
  const setToken = token => {
    dispatch({ type: SET_TOKEN, payload: token });
    setAuth();
  };
  //set as authenicated
  const setAuth = () => dispatch({ type: SET_AS_AUTHENTICATED });

  //get all blogs
  const getBlogs = async () => {
    try {
      const blogs = await axios.get("http://localhost:5000/blogs", {
        headers: { "auth-token": state.token }
      });
      dispatch({ type: GET_BLOGS, payload: blogs.data });
    } catch (error) {
      console.error(error);
    }
  };
  const postBlog = async (title, body) => {
    const bodyObj = {
      username: state.user.username,
      header: title,
      body: body
    };
    console.log(bodyObj);

    try {
      await axios
        .post("http://localhost:5000/blogs", bodyObj, {
          headers: { "auth-token": state.token }
        })
        .then(getBlogs);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteBlog = async id => {
    try {
      await axios
        .delete(`http://localhost:5000/blogs/${id}`, {
          headers: { "auth-token": state.token }
        })
        .then(getBlogs);
    } catch (error) {
      console.error(error);
    }
  };

  //END OF ALL
  return (
    <Context.Provider
      value={{
        user: state.user,
        token: state.token,
        isUserAuthenticated: state.isUserAuthenticated,
        allBlogs: state.allBlogs,
        setToken,
        getUser,
        getBlogs,
        postBlog,
        deleteBlog
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default State;
