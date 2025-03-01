import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import axios from "../../../Utils/axios";
import styles from "./row.module.css";

const Row = ({ title, url, isLargeRow }) => {
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");
  const singleImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function data() {
      try {
        const response = await axios.get(url);
        if (response?.data?.results) {
          setMovie(response.data.results);
        } else {
          console.log("No results found");
        }
      } catch (error) {
        console.log("Error fetching movie data:", error);
      }
    }
    data();
  }, [url]);

  console.log(movie);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (

      <div className={styles.row}>
        <h1>{title}</h1>
        <div className={styles.row_posters}>
          {movie?.map((movie, index) => (
            <img
              key={index}
              className={`${styles.row_poster} ${
                isLargeRow && styles.row_posterLarge
              }`}
              src={`${singleImage}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title || movie?.original_name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div>
          {trailerUrl && (
            <Youtube
              style={{ padding: "40px" }}
              videoId={trailerUrl}
              opts={opts}
            />
          )}
        </div>
      </div>
  );
};
export default Row;
