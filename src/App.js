import { useEffect } from "react";
import { getBlogs } from "./store/action/blog";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);
  return (
    <div className="App">
      {blogs.map((curdata) => {
        return <div>{curdata.title}</div>;
      })}
    </div>
  );
}

export default App;
