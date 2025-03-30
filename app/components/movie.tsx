"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({title, id, poster_path}: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`)
  }

  return (
    <div className="group cursor-pointer relative">
      <Link prefetch href={`/movies/${id}`}>
      <img
        src={poster_path}
        alt={title} 
        className="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        onClick={onClick}
      />
      <div className="text-white mt-2">{title}</div>
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-950 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer">
        View Detail
        </button>
      </div> */}
      </Link>
    </div>
  )
}