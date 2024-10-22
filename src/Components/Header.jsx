import React from "react";

export default function Header() {
  return (
    <nav className="my-5 flex justify-between">
      <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
      <button className="border border-sky-400 rounded-full p-1 w-12 h-12">
        <img
          className="w-full h-full rounded-full"
          src="https://media.istockphoto.com/id/534506989/photo/lets-make-it-happen.jpg?s=612x612&w=is&k=20&c=YrgtvzklOv5eeVYQL_EQYyEnUB_GUSDoRZIq6W07szk="
          alt=""
        />
      </button>
    </nav>
  );
}
