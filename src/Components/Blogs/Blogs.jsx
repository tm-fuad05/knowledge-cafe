import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ handleBookmark, handleTime }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-2">
      {blogs.map((blog, index) => (
        <Blog
          
          key={index}
          handleBookmark={handleBookmark}
          handleTime={handleTime}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
}
