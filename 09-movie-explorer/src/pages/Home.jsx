import React from "react";
import MovieCard from "../components/MovieCard";
import MovieRow from "../components/MovieRow";
import HeroBanner from "../components/HeroBanner";

function Home() {
  const dummyMovies = [
    {
      id: 1,
      title: "Dune: Part Two sdfdgsdhsdfh",
      poster_path:
        "https://image.tmdb.org/t/p/w342/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      vote_average: 8.2,
      release_date: "2024-02-27",
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 3,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 4,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 5,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 6,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 7,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 8,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster_path:
        "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      vote_average: 8.1,
      release_date: "2023-07-19",
    },
  ];

  const featured = {
    id: 1,
    title: "Dune: Part Two",
    overview:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    vote_average: 8.2,
  };

  return (
    // <div className="flex gap-10 bg-red-100 px-10 mt-10">
    //   {dummyMovies.map((movie) => (
    //     <MovieCard item={movie} />
    //   ))}
    // </div>
    <div>
      <HeroBanner item={featured} />
      <div className="py-8">
        <MovieRow title="Trending Now" items={dummyMovies} />
      </div>
    </div>
  );
}

export default Home;
