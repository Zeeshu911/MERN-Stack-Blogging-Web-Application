import React, { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import { Context } from "../../main";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
    </article>
  );
};

export default Blogs;
