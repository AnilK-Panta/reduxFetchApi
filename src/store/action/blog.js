export const GETBLOGS = "GETBLOGS";

export const getBlogs = () => {
  return async (dispatch) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GETBLOGS, data: json });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
