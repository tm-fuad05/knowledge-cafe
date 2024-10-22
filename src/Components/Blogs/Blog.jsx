import { CiBookmark } from "react-icons/ci";
export default function Blog({ blog, handleBookmark }) {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="flex flex-col gap-2 border-b mb-10  pb-3">
      <figure>
        <img className="rounded-lg w-full" src={cover} alt="" />
      </figure>
      <div className="flex justify-between  items-start">
        <div className="flex items-center gap-2">
          <figure className="w-10 h-10">
            <img
              className="w-full h-full object-cover rounded-full"
              src={author_img}
              alt=""
            />
          </figure>
          <div>
            <h5 className="text-sm lg:text-md font-bold">{author}</h5>
            <p className="text-xs lg:text-sm text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xs lg:text-sm text-gray-500">
            {reading_time} min read
          </p>
          <button
            className="text-xs lg:text-sm  text-gray-500"
            onClick={() => handleBookmark(title)}
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-xl lg:text-2xl font-bold sm:text-md">{title}</h1>
      <p className="text-gray-500 text-xs lg:text-md">
        {hashtags.map((hashtag) => (
          <span>{hashtag}</span>
        ))}
      </p>
      <a className="underline text-[#6047EC] text-xs lg:text-sm" href="">
        Mark as read
      </a>
    </div>
  );
}
