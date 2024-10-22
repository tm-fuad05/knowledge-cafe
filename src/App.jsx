import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="grid grid-cols-3 gap-5">
        <Blogs handleBookmark={handleBookmark}></Blogs>

        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
