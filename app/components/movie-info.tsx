import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";

// 영화정보를 외부에서도 조회 할 수 있도록 export
export async function getMovie(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.sub_info}>
          <span className={styles.age_box}>15</span> 
          · <span>평균 {movie.vote_average}</span> 
          · <span>{movie.release_date}</span> 
          · <span>{movie.runtime}분</span> 
        </div>
        <div className={styles.overview}>{movie.overview}</div>
        {(movie.homepage=="") ? "": (<a href={movie.homepage} target={"_blank"} className={styles.homepage}>Homepage</a>)}
      </div>
    </div>
  )
}
