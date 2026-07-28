import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieRow from "../components/MovieRow";
import HeroBanner from "../components/HeroBanner";

import { getTrending } from "../api/tmdb";

function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    getTrending()
      .then((results) => {
        setTrending(results);

        let randomIndex = Math.floor(Math.random() * results.length);
        setFeatured(results[randomIndex]);
        console.log(featured);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroBanner item={featured} />
      <div className="py-8">
        <MovieRow title="Trending Now" items={trending} />
      </div>
    </div>
  );
}

export default Home;
