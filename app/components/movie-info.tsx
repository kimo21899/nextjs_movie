import { API_URL } from "../constants";

// 영화정보를 외부에서도 조회 할 수 있도록 export
export async function getMovie(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
  const movie = await getMovie(id);
  return (
    <div className="flex justify-center text-white p-10 bg-[#181515]">
      <div className="flex w-400">
        <div className="pe-8">
          <img className="h-110 object-cover rounded-lg transition-transform transform scale-100 drop-shadow-xl"
            src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="text-left w-md">
          <h1 className="text-3xl font-bold"><h1>{movie.title}</h1></h1>
          <div className="pt-3">
            <span className="rounded bg-gray-900">15</span>
            · <span>평균 {movie.vote_average}</span>
            · <span>{movie.release_date}</span>
            · <span>{movie.runtime}분</span>
          </div>
          <div className="pt-4 pb-4">{movie.overview}</div>
          {(movie.homepage=="") ? "": (<a href={movie.homepage} target={"_blank"} className="">Homepage</a>)}
        </div>
      </div>
    </div>
  )
}
