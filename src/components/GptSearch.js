import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import images1 from "../assets/images1.jpg";
import images2 from "../assets/bg.jpg";

const GptSearch = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={images1} className="w-screen h-screen" alt="images" />
      <img
        src={images2}
        className="sm:w-500 sm:h-200 bg-transparent absolute top-0 left-0"
        alt="image2"
      />
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
