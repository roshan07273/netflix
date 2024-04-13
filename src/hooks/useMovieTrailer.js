import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieID +
          "/videos?language=en-US",
        API_OPTIONS
      );
      if (!data.ok) {
        console.error("Failed to fetch movie videos:", data.statusText);
        return;
      }

      const json = await data.json();

      if (
        !json.results ||
        !Array.isArray(json.results) ||
        json.results.length === 0
      ) {
        console.error(
          "No results found or results is not an array:",
          json.results
        );
        return;
      }

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length === 0 ? json.results[0] : filterData[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
