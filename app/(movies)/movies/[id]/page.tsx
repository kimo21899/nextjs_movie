import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

// Dynamic Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const movie= await getMovie(id);
  return {
    title : movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h6>Loading movie info</h6>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h6>Loading movie videos</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}