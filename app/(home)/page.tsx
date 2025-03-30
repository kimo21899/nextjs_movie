import Link from "next/link";
import Movie from "../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: 'HOME',
}

async function getMovies(){
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response=await fetch(API_URL);
  const json=await response.json();
  return json;
}

export default async function MovieHome() {
  const movies = await getMovies();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6 p-4 pt-10 pb-10">
      {(movies).map((movie)=> (
        <Movie 
          key={movie.id}
          id={movie.id} 
          title={movie.title}
          poster_path={movie.poster_path} />
        ))}
    </div>
  )
}