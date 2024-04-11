import React from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
const useTopMovies = () => {
  //Fetch Dat from TMDB API and Update Store
  const dispatch = useDispatch();
  const getTopPMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTopPMovies();
  }, []);
};

export default useTopMovies;
