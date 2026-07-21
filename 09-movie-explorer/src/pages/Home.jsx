import React from "react";
import MovieCard from "../components/MovieCard";
import MovieRaw from "../components/MovieRaw";

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

  return (
    // <div className="flex gap-10 bg-red-100 px-10 mt-10">
    //   {dummyMovies.map((movie) => (
    //     <MovieCard item={movie} />
    //   ))}
    // </div>
    <div className="py-8 bg-red-300">
      <MovieRaw title="Trending Now" items={dummyMovies} />
    </div>
  );
}

export default Home;
