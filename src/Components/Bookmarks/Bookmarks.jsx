import React from "react";
import Bookmark from "./Bookmark";

export default function Bookmarks({ handleBookmark, bookmarks }) {
  return (
    <div>
      <div className="bg-[#1111110D] p-5 rounded-lg mb-10">
        <h2 className="text-lg font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <Bookmark
          handleBookmark={handleBookmark}
          bookmarks={bookmarks}
        ></Bookmark>
      </div>
    </div>
  );
}
