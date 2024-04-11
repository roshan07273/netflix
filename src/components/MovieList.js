// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return null;
  }

  return (
    <div className="overflow-x-scroll">
      <div className="mb-4">
        <h1 className="mx-2 text-2xl font-bold text-white">{title}</h1>
      </div>
      <div className="flex gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
