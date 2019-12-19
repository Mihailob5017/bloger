import { SET_TOKEN, SET_USER, SET_AS_AUTHENTICATED, GET_BLOGS } from "./Types";

export default (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AS_AUTHENTICATED:
      return { ...state, isUserAuthenticated: true };
    case GET_BLOGS:
      return { ...state, allBlogs: action.payload };
    default:
      return state;
  }
};
