import React from "react";
import { Calendar, Clock } from "lucide-react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const dummyDetails = {
    id: 1,
    title: "Dune: Part Two",
    overview:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    vote_average: 8.2,
    release_date: "2024-02-27",
    duration: 88,
    genres: [
      { id: 1, name: "Sci-Fi" },
      { id: 2, name: "Adventure" },
    ],
  };

  return (
    <div>
      <div className="relative w-full h-[45vh] min-h-[240px] overflow-hidden">
        <img
          src={dummyDetails.backdrop_path}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent"></div>
      </div>

      <div className="w-full px-10 -mt-10 relative flex items-center justify-start gap-10">
        <div className="w-[15%] border-4 border-white rounded-2xl overflow-hidden">
          <img
            src={dummyDetails.poster_path}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-serif font-bold">
            {dummyDetails.title}
          </h1>
          <i className="text-black/60">{dummyDetails.overview}</i>
          <div className="flex gap-5">
            <span>⭐{dummyDetails.vote_average}/10</span>
            <span className="flex gap-2">
              <Calendar /> {dummyDetails.release_date}
            </span>
            <span className="flex gap-2">
              <Clock /> {dummyDetails.duration} min
            </span>
          </div>
          <div className="flex gap-5">
            {dummyDetails.genres.map((genre) => (
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
        <p className="text-text/70">{dummyDetails.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
