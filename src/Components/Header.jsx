import React from "react";
import Profile from "../assets/profile.png";
export default function Header() {
  return (
    <nav className="my-5 flex justify-between items-center border-b pb-2 w-11/12 md:w-11/12 lg:w-11/12 mx-auto">
      <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
      <button className="border-2 border-[#6047EC] rounded-full p-0.5 w-12 h-12">
        <img className="w-full h-full " src={Profile} alt="" />
      </button>
    </nav>
  );
}
