import React, { ReactNode } from "react";
import { MovieID } from "../interface";
import Image from "next/image";
import Link from "next/link";


async function getMovieData(movie_id: number) {
  const url = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTc3ODQ5NzcxMWM3ZmI5MDcyODc3ZWJjYWZhNjBmNCIsInN1YiI6IjY0YjQyYjNkMGJiMDc2MDEwYzUxNTU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iw59Nq4NF8cJTm1dnfPE9iiaB6NPMwMqWMqFp9Jwaro",
    },
    next: {
      revalidate: 60, //Every 60sec if the data is changed the cache gets updated and brings the new data if available.No stale data
    },
  });
  return url.json();
}

const MovieLayout = async ({ params,children }: { params: { id: string } ,children:ReactNode}) => {
  const data: MovieID = await getMovieData(parseInt(params.id));
  return (
    <div className="min-h-screen p-5 bg-white">
      <div className="h-[40vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="Movie Poster"
          className="object-cover w-full rounded-lg"
          fill
        />
      </div>

      <h1 className="text-4xl font-bold text-center pt-2 text-black">
        {data.title}
      </h1>

      <div className="flex flex-col md:flex-row items-center mt-10 space-y-5">
        <div className="w-full md:w-1/2 font-medium text-gray-800 md:my-4">
          <h1 className="text-3xl md:text-4xl font-heading mb-4 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-indigo-600 underline">Homepage:</span>
            <Link
              href={data.homepage}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Link to movie
            </Link>
          </h1>

          <h1 className="text-xl md:text-2xl font-heading mb-4">
            <span className="text-indigo-600 underline">
              Original Language:
            </span>{" "}
            {data.original_language}
          </h1>

          <h1 className="text-xl md:text-2xl font-heading mb-4">
            <span className="text-indigo-600 underline">Overview:</span>{" "}
            {data.overview}
          </h1>

          <h1 className="text-xl md:text-2xl font-heading">
            <span className="text-indigo-600 underline">Release Date:</span>{" "}
            {data.release_date}
          </h1>
        </div>

        <div className="w-2/3 md:w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default MovieLayout;
