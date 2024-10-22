import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ handleBookmark }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-2">
      {blogs.map((blog) => (
        <Blog handleBookmark={handleBookmark} blog={blog}></Blog>
      ))}
    </div>
  );
}
