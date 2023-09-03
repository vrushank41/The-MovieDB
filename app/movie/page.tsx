import React from "react";
import Image from "next/image";
import { Trending } from "./interface";
import Link from "next/link";

async function getData() {
  const url = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTc3ODQ5NzcxMWM3ZmI5MDcyODc3ZWJjYWZhNjBmNCIsInN1YiI6IjY0YjQyYjNkMGJiMDc2MDEwYzUxNTU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iw59Nq4NF8cJTm1dnfPE9iiaB6NPMwMqWMqFp9Jwaro",
    },
    next:{
      revalidate:10,//Every 10sec if the data is changed the cache gets updated and brings the new data if available
    }
  });
  return url.json();
}

const page = async () => {
  const data:Trending = await getData();
  return (
    <div className="px-6 sm:px-8 lg:px-12 bg-white text-black">
      <div className="p-4">
        <h1 className="text-2xl font-extrabold text-center lg:text-3xl p-4 text-gray-800">
          Trending Movies
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((movie)=>{
          return (
            <div key={movie.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <Link href={`/movie/${movie.id}`} className="group relative block h-48 overflow-hidden bg-gray-200 md:h-64">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Banner" width={500} height={200} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
              </Link>
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link href={`/movie/${movie.id}`} className="transition duration-200 hover:text-teal-500 active:text-teal-700">Title - {movie.title}</Link>
                </h2>
                <h2 className="mb-2 text-lg font-sans text-gray-500">
                  <Link href={`/movie/${movie.id}`}>Release Date - {movie.release_date}</Link>
                </h2>
                <p className="line-clamp-4 text-gray-600 font-consolas">Desc - {movie.overview}</p>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
};

export default page;
