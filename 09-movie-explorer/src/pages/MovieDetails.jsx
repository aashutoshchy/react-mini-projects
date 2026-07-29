import React, { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import { getDetails } from "../api/tmdb"

function MovieDetails() {
  const { type, id } = useParams();

  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getDetails(type, id).then((data) => {
      setDetails(data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
    console.log(details)
  }, [])


  if (!details) {
    return <div className="p-8 text-text">Couldn't load details.</div>;
  }

  const title = details.title || details.name;
  const runtime = details.runtime || details.episode_run_time && details.episode_run_time[0]

  return (

    <div>
      <div className="relative w-full h-[45vh] min-h-[240px] overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent"></div>
      </div>

      <div className="w-full px-10 -mt-10 relative flex items-center justify-start gap-10">
        <div className="lg:w-[30%] border-4 border-white rounded-2xl overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-serif font-bold">
            {title}
          </h1>
          <i className="text-black/60">{details.overview}</i>
          <div className="flex gap-5">
            <span>⭐{details.vote_average}/10</span>
            <span className="flex gap-2">
              <Calendar /> {details.release_date}
            </span>
            <span className="flex gap-2">
              <Clock /> {runtime} min
            </span>
          </div>
          <div className="flex gap-5">
            {details.genres.map((genre) => (
              <p
                key={genre.id}
                className="bg-accent px-4 py-1 text-xs rounded-4xl"
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 my-5">
        <h2 className="font-bold font-serif text-2xl">Overview</h2>
        <p className="text-text/70">{details.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
