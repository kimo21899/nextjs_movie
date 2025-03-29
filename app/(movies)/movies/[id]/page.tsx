import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

// Dynamic Metadata
export async function generateMetadata( { params }: { params: { id: string } }) {
  const {id} = await params;
  const movie= await getMovie(id);
  return {
    title : movie.title,
  };
}

// params를 함수 인자로 받을 때 params: { id }처럼 직접 구조 분해 하지 않음.
// 함수 내부에서 const { id } = params;로 구조 분해.
export default async function MovieDetailPage( { params }: { params: { id: string } }) {
  const {id} = await params;
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