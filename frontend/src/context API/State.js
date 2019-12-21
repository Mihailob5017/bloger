import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import {
  SET_TOKEN,
  SET_USER,
  SET_AS_AUTHENTICATED,
  GET_BLOGS,
  RESET_STATE,
  GET_ALL_USERS
} from "./Types";
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
    allUsers: [],
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

  //post a new blog
  const postBlog = async (title, body) => {
    const bodyObj = {
      username: state.user.username,
      header: title,
      body: body
    };
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

  //filter a specific posts
  const filterPosts = username =>
    state.allBlogs.filter(blog => blog.username === username);

  //log out all the posts
  const logOut = () => {
    const initialState = {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        email: ""
      },
      token: "",
      allUsers: [],
      allBlogs: [],
      isUserAuthenticated: false
    };
    dispatch({ type: RESET_STATE, payload: initialState });
  };

  //delete all you posts
  const deleteYourPosts = async () => {
    await filterPosts(state.user.username).forEach(post =>
      deleteBlog(post._id)
    );
    getBlogs();
  };

  const getAllUsers = async () => {
    try {
      const allUsers = await axios.get("http://localhost:5000/allusers");
      dispatch({ type: GET_ALL_USERS, payload: allUsers.data });
    } catch (error) {
      console.log(error);
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
        allUsers: state.allUsers,
        setToken,
        getUser,
        getBlogs,
        postBlog,
        deleteBlog,
        logOut,
        filterPosts,
        deleteYourPosts,
        getAllUsers
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default State;
