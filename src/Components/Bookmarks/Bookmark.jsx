export default function Bookmark({ bookmarks }) {
  return (
    <div>
      {bookmarks.map((bookmark, idx) => (
        <div key={idx} className="bg-white rounded-lg my-2 ">
          <h5 className="text-md font-bold p-2">{bookmark}</h5>
        </div>
      ))}
    </div>
  );
}
