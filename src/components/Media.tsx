import { useState } from "react";
import { Link } from "react-router-dom";
import { MoreAboutMovie } from "../pages/MoreAboutMovie";
import MovieContentInterface from '../interfaces/MovieContentInterface'

interface MovieProps extends MovieContentInterface{
  data: any
}
export function Media({data}: MovieProps) {

  const [showMore, setShowMore] = useState(false)

  return (
    <div
      className="relative group">
      <img
        className="w-full h-full object-cover transition group-hover:blur-sm delay-100"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="banner"
        loading="lazy"
      />

      <div
        className="absolute transform translate-y-[100%] bg-gray-700/50 transition duration-500 ease-in-out w-full min-h-[70%] h-auto flex flex-col items-center justify-center gap-3 group-hover:-translate-y-[100%] group-focus:-translate-y-[100%] p-4 shadow-xl">

        <h2
          className="leading-tight text-sm md:text-base">
          {data.title}
        </h2>

        <p
          className="line-clamp-3  leading-tight font-light text-xs md:text-sm ">
          {data.overview}
        </p>

        <button
          className={` ${showMore ? 'bg-green-600 hover:bg-green-500' : 'bg-[#123a68] hover:bg-[#081524]' } w-full py-2 text-sm md:py-3 transition text-center rounded-lg shadow-md`}
          onClick={() => setShowMore(true)}
          onBlur={() => setShowMore(false)}
        >
          Saiba mais
        </button>
      </div>

        { 
          showMore && <MoreAboutMovie banner={data.poster_path} state={showMore} />
        }
    </div>
  )
}