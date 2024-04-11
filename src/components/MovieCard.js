// MovieCard.js
import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-none w-40 h-40 ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie_Card"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;
