import { useEffect, useState } from "react";
import styles from "./banner.module.css";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function dataWebs() {
      try {
        const response = await axios.get(requests.originals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    }
    dataWebs();
  }, []);

  const truncate = (Astring, max_num) => {
    return Astring?.length > max_num
      ? Astring.substr(0, max_num - 1) + "..."
      : Astring;
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className={styles.inner_banner}>
        <h1>{movie?.originals_name || movie?.name}</h1>
        <div className={styles.banner_button}>
          <button className={`${styles.btn} ${styles.play}`}>Play</button>
          <button className={styles.btn}>My List</button>
        </div>
        <p className={styles.banner_descrip}>
          {truncate(movie?.overview, 150)}
        </p>
      </div>
        <div className={styles.banner_fadeBottom}></div>
    </div>
  );
};

export default Banner;
