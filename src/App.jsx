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
    <>
      <Header></Header>

      <div className="w-11/12 lg:w-10/12 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5">
          <Blogs handleBookmark={handleBookmark}></Blogs>

          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
