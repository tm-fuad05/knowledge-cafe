import React from "react";
import Bookmark from "./Bookmark";
import Time from "../Time/Time";
export default function Bookmarks({ handleBookmark, bookmarks, time }) {
  return (
    <div>
      <Time time={time}></Time>
      <div className="bg-[#1111110D] p-5 rounded-lg mb-10 mt-4">
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
