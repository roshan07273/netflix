import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import images1 from "../assets/images1.jpg";

const GptSearch = () => {
  return (
    <div>
      <img src={images1} className="w-screen h-screen" alt="images" />
      <GptSearchBar />

      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
