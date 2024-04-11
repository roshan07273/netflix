import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt[20%] py-40 text-white px-6 md:px-12 bg-transparent rounded-md">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="break-after-auto text-lg md:text-base mb-6 w-1/4">
        {overview}
      </p>
      <div className="flex space-x-4">
        <button className=" text-black border-2 border-black hover:border-transparent bg-white hover:bg-white-700 hover:text-black py-2 px-6 md:px-8 rounded-full transition duration-300 ease-in-out">
          ▶ Play
        </button>
        <button className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 md:px-8 rounded-full transition duration-300 ease-in-out">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
