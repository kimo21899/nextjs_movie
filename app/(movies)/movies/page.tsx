import Link from "next/link";

export const metadata = {
  title: 'MOVIE',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
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
    <div>
      <h1>Hello, Next Movie!!</h1>
      <div>
        {(movies).map((movie)=> (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  )
}