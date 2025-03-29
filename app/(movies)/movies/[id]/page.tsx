import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export const metadata = {
  title: 'MOVIE DETAIL',
}

// async function getMovie(id:string) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log(`Fetching movies: ${Date.now()}`);
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id:string) {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   console.log(`Fetching videos: ${Date.now()}`);
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({params}: {
  params: Promise<{id:string}>
}) {
  const {id} =  await params;

  console.log("========================");
  console.log(`start fetching: ${Date.now()}`);
  // const movie= await getMovie(id);
  // const videos= await getVideos(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(`end fetching: ${Date.now()}`);

  return (
    <div>
      <h1>Movie Detail</h1>
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>Videos</h2>
      <Suspense fallback={<h3>Loading movie videos</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}