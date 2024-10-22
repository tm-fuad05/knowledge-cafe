import React from "react";
import Profile from "../assets/profile.png";
export default function Header() {
  return (
    <nav className="my-5 flex justify-between items-center border-b pb-2 ">
      <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
      <button className="border border-sky-400 rounded-full p-1 w-12 h-12">
        <img className="w-full h-full " src={Profile} alt="" />
      </button>
    </nav>
  );
}
