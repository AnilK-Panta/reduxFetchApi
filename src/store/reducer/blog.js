import { GETBLOGS } from "../action/blog";
const initialState = {
  blogs: [],
  blog: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETBLOGS:
      return {
        ...state,
        blogs: action.data,
      };
    default:
      return state;
  }
};

export default blogReducer;
