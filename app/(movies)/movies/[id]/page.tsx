import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

// Next.js 15 이후, Params와 SearchParams는 이제 Promise를 사용해야 함
type IParams = Promise<{
  id: string;
}>;

// Dynamic Metadata
export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const movie= await getMovie(params.id);
  return {
    title : movie.title,
  };
}

export default async function MovieDetailPage(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;

  return (
    <>
      <Suspense fallback={<h6>Loading movie info</h6>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h6>Loading movie videos</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  )
}